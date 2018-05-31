import { Component, OnInit } from '@angular/core';
import {CVService} from '../cv.service';
import { CV } from '../entity/cv/cv';
import { PersonData } from '../entity/cv/helper/personData';
import { Experience } from '../entity/cv/helper/experience';
import { Education } from '../entity/cv/helper/education';
import { Language } from '../entity/cv/helper/language';
import { Competences } from '../entity/cv/helper/competences';
import { Job } from '../entity/cv/helper/job';
import { School } from '../entity/cv/helper/school';

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css']
})
export class CreateCvComponent implements OnInit {

  // Direct CV-entity attributes
  owner: string;
  resume: string;
  spareTime: string;
  volunteer: string;
  image: string;
  personData: PersonData;
  experience: Experience;
  education: Education;
  language: Language;
  linkedIn: string;
  competences: Competences;

  // Work-around attributes
  skill1: string;
  skill2: string;
  skill3: string;
  skill4: string;
  skill5: string;
  skill6: string;
  personality1: string;
  personality2: string;
  personality3: string;
  personality4: string;
  personality5: string;
  personality6: string;
  job1: Job;
  job2: Job;
  job3: Job;
  school1: School;
  school2: School;

  constructor(private cvService: CVService) { }

  ngOnInit() {
    this.personData = new PersonData();
    this.experience = new Experience();
    this.education = new Education();
    this.language = new Language();
    this.job1 = new Job();
    this.job2 = new Job();
    this.job3 = new Job();
    this.school1 = new School();
    this.school2 = new School();
  }

  createCV(): void {
    this.personData.name = this.owner;
    this.evaluateSkills();
    this.evaluatePersonality();
    this.evaluateExperience();
    this.evaluateEducation();
    const newCV = new CV(this.owner, this.personData, this.resume, this.competences, this.experience, this.education, this.spareTime, this.volunteer);
    this.cvService.setTempCV(newCV);
    this.cvService.addCV(JSON.stringify(newCV));
  }

  evaluateSkills(): void {
    if (typeof this.skill1 != 'undefined') {
      this.competences.skills.push(this.skill1);
    } 
    if (typeof this.skill2 != 'undefined') {
      this.competences.skills.push(this.skill2);
    }
    if (typeof this.skill3 != 'undefined') {
      this.competences.skills.push(this.skill3);
    }
    if (typeof this.skill4 != 'undefined') {
      this.competences.skills.push(this.skill4);
    }
    if (typeof this.skill5 != 'undefined') {
      this.competences.skills.push(this.skill5);
    }
    if (typeof this.skill6 != 'undefined') {
      this.competences.skills.push(this.skill6);
    }
  }

  evaluatePersonality(): void {
    if (typeof this.personality1 != 'undefined') {
      this.competences.personality.push(this.personality1);
    }
    if (typeof this.personality2 != 'undefined') {
      this.competences.personality.push(this.personality2);
    }
    if (typeof this.personality3 != 'undefined') {
      this.competences.personality.push(this.personality3);
    }
    if (typeof this.personality4 != 'undefined') {
      this.competences.personality.push(this.personality4);
    }
    if (typeof this.personality5 != 'undefined') {
      this.competences.personality.push(this.personality5);
    }
    if (typeof this.personality6 != 'undefined') {
      this.competences.personality.push(this.personality6);
    }
  }

  evaluateExperience(): void {
    this.experience.jobs.push(this.job1);
    this.experience.jobs.push(this.job2);
    this.experience.jobs.push(this.job3);
  }

  evaluateEducation(): void {
    this.education.schools.push(this.school1);
    this.education.schools.push(this.school1);
  }

}
