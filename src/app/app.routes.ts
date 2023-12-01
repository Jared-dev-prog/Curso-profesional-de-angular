import { Routes } from '@angular/router';
import { PipesComponent } from './components/pipes/pipes.component';
import { EstructuralComponent } from './components/estructural/estructural.component';
import { CompraComponent } from './components/compra/compra.component';
import { NuevaComponent } from './components/compra/nueva/nueva.component';
import { HistorialComponent } from './components/compra/historial/historial.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'pipes', pathMatch: 'full' },
  { path: 'pipes', component: PipesComponent },
  { path: 'estructural', component: EstructuralComponent },
  {
    path: 'compra',
    component: CompraComponent,
    canActivate: [authGuard],
    children: [
      { path: 'nueva', component: NuevaComponent },
      { path: 'historial', component: HistorialComponent },
    ],
  },
];
