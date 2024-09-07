import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  banner1Transform: string = '';
  banner2Transform: string = '';
  banner3Transform: string = '';
  onMouseMove(event: MouseEvent) {
    const movementFactor = 0.04;
    const moveX = event.clientX * movementFactor;

    this.banner1Transform = `translateX(${moveX}px)`;
    this.banner2Transform = `translateX(${moveX}px)`;
    this.banner3Transform = `translateX(${moveX}px)`;
  }
}
