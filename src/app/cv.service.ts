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

  tempCV : CV;

  constructor(private db : AngularFireDatabase) { }

  getCVS(): Observable<any[]> {
    return this.db.list('cvs').valueChanges();
  }

  addCV(cv: string): void {
    //this.db.list('cvs').push(cv);
    console.log(cv);
  }

  setTempCV(cv: CV): void {
    this.tempCV = cv;
  }

}
