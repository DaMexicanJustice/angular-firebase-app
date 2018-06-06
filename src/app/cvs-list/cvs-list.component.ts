import { Component, OnInit } from '@angular/core';
import {CVService} from '../cv.service';
import { AngularFireList } from 'angularfire2/database';
import { CV } from '../entity/cv/cv';
import { Observable, of} from 'rxjs';

@Component({
  selector: 'app-cvs-list',
  templateUrl: './cvs-list.component.html',
  styleUrls: ['./cvs-list.component.css']
})
export class CvsListComponent implements OnInit {

  cvs: Observable<any[]>;

  constructor(private cvService: CVService) { 
  
  }

  ngOnInit() {
    this.getCVS();
  }

  getCVS(): void {
    this.cvs = this.cvService.getCVS();
  }

}