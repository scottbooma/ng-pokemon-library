import { Component } from '@angular/core';
import { PokemonService, PokemonDetail } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-display',
  templateUrl: './pokemon-display.component.html',
  styleUrls: ['./pokemon-display.component.css'],
})
export class PokemonDisplayComponent {
  pokemon: PokemonDetail = this.pokemonService.pokemon;

  constructor(private pokemonService: PokemonService) {}
}
