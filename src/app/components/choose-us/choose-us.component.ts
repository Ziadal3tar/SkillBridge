import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choose-us.component.html',
  styleUrl: './choose-us.component.scss'
})
export class ChooseUsComponent {
  banner1Transform: string = '';
  banner2Transform: string = '';
  banner3Transform: string = '';
  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      let rotate: HTMLElement | any = document.getElementById('rotate');
      if (rotate) {
        rotate.style.rotate = '100000deg';
      }
    }
  }

  onMouseMove(event: MouseEvent) {
    const movementFactor = 0.04;
    const moveX = event.clientX * movementFactor;

    this.banner1Transform = `translateX(${moveX}px)`;
    this.banner2Transform = `translateX(${moveX}px)`;
    this.banner3Transform = `translateX(${moveX}px)`;
  }

}
