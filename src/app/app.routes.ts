import { Routes } from '@angular/router';
import { PipesComponent } from './components/pipes/pipes.component';
import { EstructuralComponent } from './components/estructural/estructural.component';

export const routes: Routes = [
  { path: 'pipes', component: PipesComponent },
  { path: 'estructural', component: EstructuralComponent },
];
