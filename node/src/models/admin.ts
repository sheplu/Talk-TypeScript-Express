import { Member } from "./member";

export class Admin extends Member {
    age: number;
    firstname: string;
    role: Array<string>;

    constructor(age: number, firstname: string, role = []) {
        super(age, firstname);
        this.role = role;
    }

    getAge(): number {
        return this.age + 1;
    }

    getRole(): string[] {
        return this.role;
    }
}