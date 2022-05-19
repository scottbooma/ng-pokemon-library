import { Component } from '@angular/core';

type Ability = {
  name: string;
  description: string;
};

type PokemonDetail = {
  name: string;
  imageUrl: string;
  abilities: Ability[];
};
@Component({
  selector: 'app-pokemon-display',
  templateUrl: './pokemon-display.component.html',
  styleUrls: ['./pokemon-display.component.css'],
})
export class PokemonDisplayComponent {
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

  constructor() {}
}
