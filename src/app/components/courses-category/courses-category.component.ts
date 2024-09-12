import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-courses-category',
  standalone: true,
  imports: [CarouselModule,CommonModule],
  templateUrl: './courses-category.component.html',
  styleUrl: './courses-category.component.scss'
})
export class CoursesCategoryComponent {

  slides = [
    { category: 'Development' ,num:'07',icon:'bi-code-slash',color:''},
    { category: 'Marketing' ,num:'03',icon:'bi-amd',color:''},
    { category: 'Accounting' ,num:'04',icon:'bi-person-vcard',color:''},
    { category: 'Business' ,num:'05',icon:'bi-buildings',color:''},
    { category: 'Development' ,num:'07',icon:'bi-code-slash',color:''},

  ];


  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [
      ' <i class="bi bi-caret-left-fill "></i> ',
      '<i class="bi bi-caret-right-fill "></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
      1200: {
        items: 4,
      },
    },
    nav: true,
  };
}
