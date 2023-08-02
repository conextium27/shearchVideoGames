import { Component, OnInit } from '@angular/core';
import { IGameCards } from 'src/interface/game-card.interface';
import { GamesService } from 'src/app/service/games.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
  cards: IGameCards[] = [];

  constructor(private gamesService: GamesService) {}
  ngOnInit() {
    this.gamesService.getDataService()
    .subscribe((res: any) => {
      this.cards= res;
   });
  }
  order(typeOrder: string) {
    if (typeOrder === 'upward') {
      this.cards.sort((a, b) => a.name.localeCompare(b.name));
    } else if (typeOrder === 'falling') {
      this.cards.sort((a, b) => b.name.localeCompare(a.name));
    } else {
    }
  }



}
