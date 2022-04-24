import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getpokemonstipo(parametros: any): Observable <any>{
    const URL =  'http://localhost:3000/pokemons/' + parametros.filtro+'/'+parametros.dato;

    return this.http.get(URL);
  }

}
