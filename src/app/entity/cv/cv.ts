import { PersonData } from "./helper/personData";
import { Competences } from "./helper/competences";
import { Experience } from "./helper/experience";
import { Education } from "./helper/education";
import { Language } from "./helper/language";

export class CV {
    public owner: string;
    public personData: PersonData;
    public resume: string;
    public competences: Competences;
    public experience: Experience;
    public education: Education;
    public language: Language;
    public spareTime: string;
    public volunteer: string;
    public image: string;
    public jsonOBJ: string;

    constructor(owner: string, personData: PersonData, resume: string, competences: Competences, experience: Experience, education: Education, spareTime: string, volunteer: string) {
        this.owner = owner;
        this.personData = personData;
        this.resume = resume;
        this.competences = competences;
        this.experience = experience;
        this.education = education;
        this.spareTime = spareTime;
        this.volunteer = volunteer;
        //this.image = image;
    }

}