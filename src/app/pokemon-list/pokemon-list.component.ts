// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemonList: Pokemon[];
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.listPokemon().subscribe((pokemon) => {
      this.pokemonList = pokemon;
    });
  }
}
