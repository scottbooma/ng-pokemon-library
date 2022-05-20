import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDisplayComponent } from './pokemon-display/pokemon-display.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pokemon-list',
    pathMatch: 'full',
  },
  {
    path: 'pokemon-list',
    component: PokemonListComponent,
  },
  {
    path: 'pokemon-display/:pokemon',
    component: PokemonDisplayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
