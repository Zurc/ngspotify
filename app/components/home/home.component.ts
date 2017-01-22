import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  searchStr: string;

  constructor(private _spotifyService: SpotifyService) { 
    
  }

  searchMusic(){
    this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
      console.log(res.artists.items);
    });
  }

}