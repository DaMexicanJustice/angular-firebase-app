import { Injectable } from '@angular/core';

import { Observable, of} from 'rxjs';

import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList, DatabaseSnapshot } from 'angularfire2/database';
import { CV } from './entity/cv/cv';

// entity
import {PersonData} from './entity/cv/helper/personData';
import {Competences} from './entity/cv/helper/competences';
import {Experience} from './entity/cv/helper/experience';
import {Education} from './entity/cv/helper/education';
import {Language} from './entity/cv/helper/language';

@Injectable({
  providedIn: 'root'
})
export class CVService {

  constructor(private db : AngularFireDatabase) { }

  getCVS(): Observable<any[]> {
    return this.db.list('cvs').valueChanges();
  }

  addCV(owner: string, personData: PersonData, resume: string, competences: Competences,
    experience: Experience, education: Education, language: Language, spareTime: string,
    volunteer: string, image: string): void {
    const newCV = new CV(owner, personData, resume, competences, experience, education, language, 
      spareTime, volunteer, image);
      
  }
}
