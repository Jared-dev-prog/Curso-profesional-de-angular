import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AtributoComponent } from './components/atributo/atributo.component';
import { EstructuralComponent } from './components/estructural/estructural.component';
import { PipesComponent } from './components/pipes/pipes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    AtributoComponent,
    EstructuralComponent,
    PipesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'primer-proyecto';
  constructor() {
    localStorage.setItem('id', '1234');
  }
}
