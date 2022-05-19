// @ts-nocheck
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, forkJoin } from 'rxjs';

export type Pokemon = {
  name: string;
  sprites?: {
    front_default: string;
  };
};

export type Ability = {
  name: string;
  description: string;
};

export type PokemonDetail = {
  name: string;
  imageUrl: string;
  abilities: Ability[];
};

export type PokemonResponse = {
  name: string;
  url: string;
};
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  listPokemon() {
    return this.http
      .get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=51')
      .pipe(
        map((response) =>
          response.results
            .map((pokemon) => pokemon.name)
            .map((name) => this.getPokemon(name))
        ),
        mergeMap((observables) => forkJoin(observables))
      );
  }
  getPokemon(name: string) {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  constructor(private http: HttpClient) {}

  pokemon: PokemonDetail = {
    name: 'Ditto',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    abilities: [
      {
        name: 'Imposter',
        description: 'Transforms upon entering battle.',
      },
      {
        name: 'Imposter',
        description: 'Transforms upon entering battle.',
      },
    ],
  };

  allPokemon: Pokemon[] = [
    {
      name: 'Ditto',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      name: 'Ditto',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      name: 'Ditto',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      name: 'Ditto',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      name: 'Ditto',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      name: 'Ditto',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      name: 'Ditto',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      name: 'Ditto',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      name: 'Ditto',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      name: 'Ditto',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      name: 'Ditto',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      name: 'Ditto',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      name: 'Ditto',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      name: 'Ditto',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      name: 'Ditto',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      name: 'Ditto',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      name: 'Ditto',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      name: 'Ditto',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      name: 'Ditto',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      name: 'Ditto',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      name: 'Ditto',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
  ];
}
