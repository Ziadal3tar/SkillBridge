import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { CourseComponent } from "../course/course.component";
import { ChooseUsComponent } from "../choose-us/choose-us.component";
import { EventsComponent } from "../events/events.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselModule, CourseComponent, ChooseUsComponent, EventsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  filterTap:any ='All'

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
  slides = [
    { category: 'Development' ,num:'07',icon:'bi-code-slash',color:''},
    { category: 'Marketing' ,num:'03',icon:'bi-amd',color:''},
    { category: 'Accounting' ,num:'04',icon:'bi-person-vcard',color:''},
    { category: 'Business' ,num:'05',icon:'bi-buildings',color:''},
  ];
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
  courses=[
  {
    name:'How to Write the Ultimate 1 Page Strategic Business Plan',
    category:'Accounting',
    teacher:'Jhon Sina',
    rating:'3',
    lessons:[1,2,3,4,5,6,7,8,9,1,11,12,13,14,15,16,17,18,19],
    students:[1,2,3,4,5,6,7,8,9,1,11,12],
    imgSrc:'./assets/post-3.jpg',

  },
  {
    name:'How to Write the Ultimate 1 Page Strategic Business Plan',
    category:'Accounting',
    teacher:'Jhon Sina',
    rating:'3',
    lessons:[1,2,3,4,5,6,7,8,9,1,11,12,13,14,15,16,17,18,19],
    students:[1,2,3,4,5,6,7,8,9,1,11,12],
    imgSrc:'./assets/post-3.jpg',

  },
  {
    name:'How to Write the Ultimate 1 Page Strategic Business Plan',
    category:'Accounting',
    teacher:'Jhon Sina',
    rating:'3',
    lessons:[1,2,3,4,5,6,7,8,9,1,11,12,13,14,15,16,17,18,19],
    students:[1,2,3,4,5,6,7,8,9,1,11,12],
    imgSrc:'./assets/post-3.jpg',

  },
  {
    name:'How to Write the Ultimate 1 Page Strategic Business Plan',
    category:'Accounting',
    teacher:'Jhon Sina',
    rating:'3',
    lessons:[1,2,3,4,5,6,7,8,9,1,11,12,13,14,15,16,17,18,19],
    students:[1,2,3,4,5,6,7,8,9,1,11,12],
    imgSrc:'./assets/post-3.jpg',

  },
  {
    name:'How to Write the Ultimate 1 Page Strategic Business Plan',
    category:'Accounting',
    teacher:'Jhon Sina',
    rating:'3',
    lessons:[1,2,3,4,5,6,7,8,9,1,11,12,13,14,15,16,17,18,19],
    students:[1,2,3,4,5,6,7,8,9,1,11,12],
    imgSrc:'./assets/post-3.jpg',

  },
  {
    name:'How to Write the Ultimate 1 Page Strategic Business Plan',
    category:'Accounting',
    teacher:'Jhon Sina',
    rating:'3',
    lessons:[1,2,3,4,5,6,7,8,9,1,11,12,13,14,15,16,17,18,19],
    students:[1,2,3,4,5,6,7,8,9,1,11,12],
    imgSrc:'./assets/post-3.jpg',

  },
  {
    name:'How to Write the Ultimate 1 Page Strategic Business Plan',
    category:'Accounting',
    teacher:'Jhon Sina',
    rating:'3',
    lessons:[1,2,3,4,5,6,7,8,9,1,11,12,13,14,15,16,17,18,19],
    students:[1,2,3,4,5,6,7,8,9,1,11,12],
    imgSrc:'./assets/post-3.jpg',

  },
  {
    name:'How to Write the Ultimate 1 Page Strategic Business Plan',
    category:'Accounting',
    teacher:'Jhon Sina',
    rating:'3',
    lessons:[1,2,3,4,5,6,7,8,9,1,11,12,13,14,15,16,17,18,19],
    students:[1,2,3,4,5,6,7,8,9,1,11,12],
    imgSrc:'./assets/post-3.jpg',

  },
  {
    name:'How to Write the Ultimate 1 Page Strategic Business Plan',
    category:'Accounting',
    teacher:'Jhon Sina',
    rating:'3',
    lessons:[1,2,3,4,5,6,7,8,9,1,11,12,13,14,15,16,17,18,19],
    students:[1,2,3,4,5,6,7,8,9,1,11,12],
    imgSrc:'./assets/post-3.jpg',

  },

]
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
  constructor() {
    if (typeof window !== 'undefined') {
      this.borderPlay();
    }
  }

  borderPlay() {
    if (typeof document !== 'undefined') {
      let border: HTMLElement | any = document.getElementById('border');
      if (border) {
        setTimeout(() => {
          border.style.border = '1px solid #3a9ac0';
          border.style.padding = '50px';
          setTimeout(() => {
            border.style.border = '1px solid transparent';
            setTimeout(() => {
              border.style.padding = '0px';
              this.borderPlay();
            }, 2000);
          }, 1000);
        }, 2000);
      }
    }
  }

}
