import {Address } from './address';
import { Contact } from './contact';

export class PersonData {
    name: string;
    address: Address;
    contact: Contact;

    constructor() {
        this.address = new Address();
        this.contact = new Contact();
    }
    
}