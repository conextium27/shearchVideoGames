import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GamesService } from './../../service/games.service';
import { IGameCards } from 'src/interface/game-card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('card') card!: IGameCards;
  //@Output() likedChange: EventEmitter<boolean> = new EventEmitter();
  liked = false;

  wishList(): void {
    this.liked = !this.liked;

    //const cardSelectedJson = JSON.stringify(cardSelected);


    //this.likedChange.emit(this.liked);
    let jsonCards: IGameCards[] = []
    if (this.liked) {
      if (localStorage.getItem('cards')) {
        jsonCards = JSON.parse(localStorage.getItem('cards') || '')
        jsonCards.push(this.card)
        localStorage.setItem('cards', JSON.stringify(jsonCards));
      } else {
        localStorage.setItem('cards', JSON.stringify([...[this.card]]))
      }
    } else {
      jsonCards = JSON.parse(localStorage.getItem('cards') || '')
      const filterCardFav: IGameCards[] = jsonCards.filter(card => card.id !== this.card.id)
      localStorage.setItem('cards', JSON.stringify(filterCardFav));
      
    }
  }



}
