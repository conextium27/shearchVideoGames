import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { GamesService } from './../../service/games.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{
  @Input('card') card: any; 
  @Output() likedChange: EventEmitter<boolean> = new EventEmitter();
  liked = false;

  toggle(): void {
    this.liked = !this.liked;
    this.likedChange.emit(this.liked);
  }
 
  

}
