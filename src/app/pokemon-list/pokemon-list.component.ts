import { Component } from '@angular/core';
import { Pokemon, PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  pokemonList: Pokemon[] = this.pokemonService.allPokemon;
  constructor(private pokemonService: PokemonService) {}
}
