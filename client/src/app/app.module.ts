import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from "@angular/forms";

//components
import { AppComponent } from './app.component';
// @ts-ignore
import { CreateComponent } from './components/users/create/create.component';
// @ts-ignore
import { LogInComponent } from './components/users/log-in/log-in.component';
import { HomeComponent } from './components/home/home.component';
import { GameMenuComponent } from './components/game-menu/game-menu.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { HowToPlayComponent } from './components/how-to-play/how-to-play.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    LogInComponent,
    HomeComponent,
    GameMenuComponent,
    MyProfileComponent,
    HowToPlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
