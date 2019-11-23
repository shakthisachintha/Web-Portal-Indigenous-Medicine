import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { ContactComponent } from './contact/contact.component';
import { LearnComponent } from './learn/learn.component';
import { VisionComponent } from './vision/vision.component';
import { MissionComponent } from './mission/mission.component';
import { HerbsComponent } from './herbs/herbs.component';
import { ServicesComponent } from './services/services.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home' ,component: HomeComponent,data: {animation: 'HomePage'} },
  { path: 'herbs', component: HerbsComponent,data:{animation: 'HerbPage'}},
  { path: 'hospitals',      component: HospitalsComponent, data: {animation: 'HospitalPage'}},
  { path: 'services',      component: ServicesComponent ,data: {animation: 'ServicesPage'}},
  { path: 'about',      component: LearnComponent,data: {animation: 'AboutPage'} },
  { path: 'contact',      component: ContactComponent ,data: {animation: 'ContactPage'}},
  { path: '**',redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HospitalsComponent,
    ContactComponent,
    LearnComponent,
    VisionComponent,
    MissionComponent,
    HerbsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
