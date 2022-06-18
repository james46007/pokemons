import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private apiUrl: string = 'https://bp-pokemons.herokuapp.com';

  constructor(private _httpClient: HttpClient) {
  }

  getPokemons() {
    return this._httpClient.get<any>(`${this.apiUrl}/?idAuthor=1`);
  }

  createPokemon(data: any) {
    return this._httpClient.post<any>(`${this.apiUrl}/?idAuthor=1`, data);
  }

  updatePokemon(id: number, data: any) {
    return this._httpClient.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deletePokemon(id: number) {
    return this._httpClient.delete<any>(`${this.apiUrl}/${id}`);
  }

  getPokemon(id: number) {
    return this._httpClient.get<any>(`${this.apiUrl}/${id}`);
  }

  getFilterPokemon(count: number) {
    return this._httpClient.get<any>(`${this.apiUrl}/${count}?idAuthor=1`);
  }
}
