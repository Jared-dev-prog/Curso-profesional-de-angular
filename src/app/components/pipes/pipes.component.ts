import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosPipe } from '../../pipes/estados.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, EstadosPipe, RouterModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
  name = 'jared';
  date = '1999-12-31 23:59:59';
  estado = 0;

  changeState() {
    this.estado = 1;
  }

  getTextState() {
    console.log('Función ejecutandose...');
    const text = this.estado === 0 ? 'PENDIENTE' : 'REGISTRADO';
    return text;
  }

  print() {
    console.log('Otra funcionalidad...');
  }
}
