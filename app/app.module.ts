import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { appRouting } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, appRouting ],
  declarations: [ AppComponent, HomeComponent, AboutComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
