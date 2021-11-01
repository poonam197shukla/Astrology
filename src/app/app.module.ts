import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginRegisterFormComponent } from './login-register-form/login-register-form.component';
import { TalkToAstrologerComponent } from './talk-to-astrologer/talk-to-astrologer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginRegisterFormComponent,
    TalkToAstrologerComponent,
    PageNotFoundComponent
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
     
      {path:'', component:HomeComponent},
      {path:'loginRegister', component:LoginRegisterFormComponent},
      {path:'talkToAstrologer', component:TalkToAstrologerComponent},
      {path:'pageNotFound', component:PageNotFoundComponent}
      
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
