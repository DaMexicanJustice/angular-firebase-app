import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CvsListComponent } from './cvs-list/cvs-list.component';
import { HomeComponent } from './home/home.component';
import { CreateCvComponent } from './create-cv/create-cv.component';

const routes: Routes = [
  { path: 'cvs-list', component: CvsListComponent },
  { path: 'home', component: HomeComponent},
  { path: 'create-cv', component: CreateCvComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}