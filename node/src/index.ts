import { User } from './models/user';
import { Member } from './models/member';
import { Admin } from './models/admin';

console.log('hello world');

let jean: Member = new Member(27, 'jean');
let bob: Admin = new Admin(40, 'bob');

console.log(jean);
console.log(jean.getAge());
console.log(bob);
console.log(bob.getAge());