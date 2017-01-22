import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArtistComponent } from './components/artist/artist.component';


import { appRouting } from './app.routing';

@NgModule({
  imports:      [ 
    BrowserModule, 
    appRouting, 
    FormsModule, 
    HttpModule 
    ],
  declarations: [ 
    AppComponent, 
    HomeComponent, 
    AboutComponent, 
    NavbarComponent, 
    ArtistComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
