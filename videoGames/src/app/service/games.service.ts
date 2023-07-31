import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IGameCards } from 'src/interface/game-card.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }
 
  apiUrl = './assets/gamelist.json';

  getDataService():Observable<IGameCards[]>{
    return this.http.get<IGameCards[]>(this.apiUrl);

  }
     
}
