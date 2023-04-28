import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DonateComponent } from './components/donate/donate.component';
import { CentreComponent } from './components/centre/centre.component';
import { SearchDonorComponent } from './components/search-donor/search-donor.component';
import { AboutComponent } from './components/about/about.component';
import { AwarenessComponent } from './components/awareness/awareness.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'centre', component: CentreComponent },
  { path: 'search-donor', component: SearchDonorComponent },
  { path: 'about', component: AboutComponent },
  { path: 'awareness', component: AwarenessComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
