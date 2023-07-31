import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }
 
  apiUrl = './assets/gamelist.json';

  getDataService(){
    return this.http.get(this.apiUrl);

  }
     
}
