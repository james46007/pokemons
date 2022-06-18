import {Component, OnInit, ViewChild} from '@angular/core';
import {PokemonsService} from "../../pokemons.service";
import {Pokemon} from "../models/Pokemon";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public display = 'none';
  public title: string = 'Nuevo Pokemon';
  public pokemon: Pokemon;
  public attack: number = 0;
  public count: number = 0;
  public pokemons: any = [];
  public error: boolean = false;

  constructor(
    private _pokemonsService: PokemonsService,
  ) {
    this.pokemon = new Pokemon();
  }

  ngOnInit(): void {
    this.getFilterPokemon();
  }

  startPokemon() {
    this.pokemon = new Pokemon();
  }

  openModal(title: string) {
    if (title === 'create') {
      this.title = 'Nuevo Pokemon';
      this.startPokemon();
    } else {
      this.title = 'Editar Pokemon';
    }
    this.display = 'block';
  }

  onCloseHandled() {
    this.display = 'none';
  }

  getFilterPokemon() {
    if (isNaN(this.count)) {
      this.error = true;
      return;
    } else {
      this.error = false;
    }

    if (this.count !== 0) {
      this._pokemonsService.getFilterPokemon(this.count).subscribe((data) => {
        this.pokemons = data;
      });
    } else {
      this._pokemonsService.getPokemons().subscribe((data) => {
        console.log('pokemons', data)
        this.pokemons = data;
      });
    }
  }

  savePokemon(idPokemon: number) {
    if (idPokemon === 0) {
      this._pokemonsService.createPokemon(this.pokemon).subscribe((data) => {
        this.getFilterPokemon();
      });
    } else {
      this._pokemonsService.updatePokemon(idPokemon, this.pokemon).subscribe((data) => {
        this.getFilterPokemon();
      });
    }
    this.onCloseHandled();
  }

  deletePokemon(idPokemon: number) {
    this._pokemonsService.deletePokemon(idPokemon).subscribe((data) => {
      this.getFilterPokemon();
    });
  }

  getPokemon(idPokemon: number) {
    this._pokemonsService.getPokemon(idPokemon).subscribe((data) => {
      this.pokemon = data;
      this.pokemon.idAuthor = data.id_author;
      this.openModal('edit');
    });
  }

}
