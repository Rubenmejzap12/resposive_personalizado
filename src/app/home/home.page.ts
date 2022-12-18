import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  airports : any;
  filtro: string = '';
  

  constructor(private httpClient: HttpClient) {
    this.airports = this.httpClient.get('https://raw.githubusercontent.com/Rubenmejzap12/aeropuertos/master/MOCK_DATA.json')
    

  }

}
