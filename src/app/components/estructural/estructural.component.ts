import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estructural',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estructural.component.html',
  styleUrl: './estructural.component.scss',
})
export class EstructuralComponent {
  isError = false;
  sections = [{ id: 1, name: 'Introduccion', duracion: '10' }];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('inicio!');
    setTimeout(() => {
      this.isError = true;
      this.sections.push(
        { id: 2, name: 'Usos de angular', duracion: '5' },
        { id: 3, name: 'Instalacion de entorno', duracion: '9' }
      );
    }, 4000);
  }

  public showError() {
    this.isError = true;
  }
}
