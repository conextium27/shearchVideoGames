import { Component, OnInit } from '@angular/core';
import { GamesService } from './service/games.service';
import { IGameCards } from 'src/interface/game-card.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'videoGames';
  constructor(private gamesService: GamesService) {}
  cards: IGameCards[] = [];
  ngOnInit() {
    this.gamesService.getDataService()
    .subscribe((res: any) => {
      this.cards= res;
   });
  }
}
