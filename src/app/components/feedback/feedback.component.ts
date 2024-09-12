import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
feedbacks:any[]=[{},{},{}]
customOptions: any = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: true,
  navSpeed: 1200,
  navText: [
    ' <i class="bi bi-caret-left-fill "></i> ',
    '<i class="bi bi-caret-right-fill "></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    740: {
      items: 1,
    },
    940: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
  nav: true,
};
}
