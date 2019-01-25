import { User } from "..";

/** return fresh array of test user */
export function getTestUsers(): User[] {
  return [
    {id: '41', name: 'Khanh', username: 'khanh', email: 'khanh@gmail.com', bio: 'test', company: 'test', location: 'test',  password: '123456', token: 'abc12345', active: true},
    {id: '42', name: 'Luong', username: 'luong', email: 'luong@gmail.com', bio: 'test', company: 'test', location: 'test',  password: '123456', token: 'abc12345', active: true},
    {id: '43', name: 'Huy', username: 'huy', email: 'huy@gmail.com', bio: 'test', company: 'test', location: 'test',  password: '123456', token: 'abc12345', active: true},
    {id: '44', name: 'Y Ta', username: 'yta', email: 'yta@gmail.com', bio: 'test', company: 'test', location: 'test',  password: '123456', token: 'abc12345', active: true},
    {id: '45', name: 'khanh {*%!Test', username: 'khanhtest', email: 'khanhtest@gmail.com', bio: 'test', company: 'test', location: 'test',  password: '123456', token: 'abc12345', active: true}
  ];
}
