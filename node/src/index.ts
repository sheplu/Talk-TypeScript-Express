import { User } from './models/user';
import { Member } from './models/member';
import { Admin } from './models/admin';

console.log('hello world');

let jean: Member = new Member(27, 'jean');
let bob: Admin = new Admin(27, 'jean');
let anna: Member | Admin = new Admin(27, 'jean');
console.log(jean);
console.log(jean.getAge());
console.log(bob);
console.log(bob.getAge());
console.log(anna);
console.log(anna.getAge());