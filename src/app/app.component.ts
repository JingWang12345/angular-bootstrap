import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'surrealism';

  artists = [
    {id: 1, name: 'René Magritte'},
    {id: 2, name: 'Yves Tanguy'},
    {id: 3, name: 'Joan Miró'},
    {id: 4, name: 'Salvador Dalí'},
    {id: 5, name: 'Paul Delvaux'}
  ]

  artistName = ''

  addArtist(){
   if (this.artistName.trim()=== '') {
     return
   }
    console.log(this.artistName);

  this.artists.push({
    id: 6,
    name: this.artistName
  })
  this.artistName = ''

  }

  removeArtist(e: { preventDefault: () => void; }, id: number){
   e.preventDefault()

   this.artists=this.artists.filter(artist => artist.id !== id)

  }
}
