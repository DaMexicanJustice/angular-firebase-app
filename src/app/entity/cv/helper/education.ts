import { School } from "./school";

export class Education {
    schools: School[];

    constructor() {
        this.schools = new Array<School>();
    }
}