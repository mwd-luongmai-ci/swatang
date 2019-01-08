import { Component, OnDestroy, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { FieldSpecifications } from '@app/_helpers/field-specification'
import { FieldValidators } from '@app/_helpers/validators';
import { User } from '@app/_models';
import { AlertService, AuthenticationService, UserService } from '@app/_services';
import { Subscription } from 'rxjs';

@Component({ templateUrl: 'change-password.component.html' })
export class ChangePasswordComponent implements OnInit, OnDestroy {
  form: FormGroup;
  loading = false;
  submitted = false;
  currentUser: User;
  currentUserSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService
  ) {
    // redirect to login if not logged in
    if (!this.authenticationService.currentUserValue) {
      this.router.navigate(['/login']);
    }
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      oldpassword: ['', FieldSpecifications.SimplePassword],
      newpassword: ['', FieldSpecifications.Password],
      confirmpassword: ['', FieldSpecifications.SimplePassword]
    }, {
        validators: FieldValidators.matchPassword
      });
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.userService.changePassword(this.currentUser.id.toString(),
      this.form.get('oldpassword').value,
      this.form.get('newpassword').value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Password updated successfully.', true);
          this.router.navigate(['/']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
