import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';

@Component({
  selector: 'my-app',
  template: `
  <app-navbar></app-navbar>
  <div class="main">
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
  providers: [ SpotifyService ]
})
export class AppComponent  { name = 'Angular'; }
