import { languageEntry } from "./languageEntry";

export class Language {
    languages: languageEntry[];

    constructor() {
        this.languages = new Array<languageEntry>();
    }
}