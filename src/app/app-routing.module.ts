import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactUsComponent },
  // { path: 'aboutus', component: AboutComponent },               // data: { title: 'Heroes List' } 
  { path: 'blog',  component: NewsComponent },           // path: 'blog', redirectTo: '', pathMatch: ''
  { path: 'Dashboard',  component: DashboardComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },

  // { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'Dashboard',  component: DashboardComponent, canActivate: [AuthGuard]},
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
