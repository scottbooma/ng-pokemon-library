// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { PokemonService, PokemonDetail, Pokemon } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-pokemon-display',
  templateUrl: './pokemon-display.component.html',
  styleUrls: ['./pokemon-display.component.css'],
})
export class PokemonDisplayComponent implements OnInit {
  pokemonDisplay: PokemonDetail = this.pokemonService.pokemon;

  getPokemon(name: string) {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getAbilities(name: string) {
    return this.http
      .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .subscribe(
        (response) =>
          response.abilities
            ?.map((ability) => ability.ability.url)
            .map((url) => this.getAbility(url)),
        mergeMap((observables) => forkJoin(observables))
      );
  }

  getAbility(url: string) {
    return this.http.get(url);
  }

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getPokemon(this.route.snapshot.params['pokemon']).subscribe(
      (pokemon) => {
        console.log(pokemon);
        this.pokemonDisplay = pokemon;
      }
    );

    console.log(this.getAbilities(this.route.snapshot.params['pokemon']));
  }
}
