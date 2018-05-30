// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Components
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { CvsListComponent } from './cvs-list/cvs-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';

//Firebase 
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Subscription } from 'rxjs';
import { database } from 'firebase';
import { environment } from '../environments/environment';
import { CreateCvComponent } from './create-cv/create-cv.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CvsListComponent,
    HomeComponent,
    CreateCvComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
