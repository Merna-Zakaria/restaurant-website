import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,  APP_INITIALIZER } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { TranslateService } from './translate.service';
import { TranslatePipe } from './translate.pipe';
import { ContactformComponent } from './contactform/contactform.component';
import { MustMatchDirective } from './contactform/must-match.directive';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    AboutComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    LoginComponent,
    DashboardComponent,
    TranslatePipe,
    ContactformComponent,
    MustMatchDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
],
  providers: [TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
