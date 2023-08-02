import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2'
import { IGameCards } from 'src/interface/game-card.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  jsonCards: IGameCards[] = [];
  showNoItems: boolean = false;
  ngOnInit() {
    this.jsonCards = JSON.parse(localStorage.getItem('cards') || '')
    this.verifyItemsStorage();
  }
  verifyItemsStorage(){
    if(this.jsonCards.length === 0){
      this.showNoItems = true;
    }
  }

  noWishList(idCard:number){
    const filterCardFav: IGameCards[] = this.jsonCards.filter(card => card.id !== idCard)
    localStorage.setItem('cards', JSON.stringify(filterCardFav));
    this.jsonCards = filterCardFav;
    this.verifyItemsStorage();
  }

  addGame(idCard: number) {
    Swal.fire({
      text: 'Videojuego adquirido correctamente',
      icon: 'success',
      confirmButtonText: 'Cool'
    }).then((result) => {
      if (result.isConfirmed) {
        this.noWishList(idCard);
      }
    })

  }

}
