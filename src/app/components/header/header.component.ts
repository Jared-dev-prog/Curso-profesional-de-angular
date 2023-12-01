import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentDate: Date | null = null;
  resultado: number | null = 0;

  constructor() {}

  ngOnInit(): void {}

  sumar(a: number, b: number) {
    this.resultado = a + b;
  }
}
