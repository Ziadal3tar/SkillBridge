import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-trust-by',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './trust-by.component.html',
  styleUrl: './trust-by.component.scss'
})
export class TrustByComponent {
  trusted=[
    {
      imgSrc:'./assets/trus1.svg'
    },
    {
      imgSrc:'./assets/trus2.svg'
    },
    {
      imgSrc:'./assets/trus3.svg'
    },
    {
      imgSrc:'./assets/trus4.svg'
    },
    {
      imgSrc:'./assets/trus5.svg'
    }
  ]
  trustedOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav:false,
    navSpeed: 700,
    navText: [
      ' <i class="bi bi-caret-left-fill "></i> ',
      '<i class="bi bi-caret-right-fill "></i>',
    ],
    responsive: {
      0: {
        items: 3,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  };
}
