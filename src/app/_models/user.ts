import {JsonProperty} from 'json2typescript';

export class User {
    @JsonProperty('_id', String, true)
    id: number = undefined;

    @JsonProperty('username', String, true)
    username: string = undefined;

    @JsonProperty('password', String, true)
    password: string = undefined;

    @JsonProperty('name', String, true)
    name: string = undefined;

    @JsonProperty('email', String, true)
    email: string = undefined;

    @JsonProperty('bio', String, true)
    bio: string = undefined;

    @JsonProperty('company', String, true)
    company: string = undefined;

    @JsonProperty('location', String, true)
    location: string = undefined;

    @JsonProperty('token', String, true)
    token: string = undefined;
}
