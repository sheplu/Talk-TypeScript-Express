import { User } from "./user";

export class Member implements User {
    age: number;
    firstname: string;

    constructor(age: number, firstname: string) {
        this.age = age;
        this.firstname = firstname;
    }

    getAge(): number {
        return this.age;
    }
}