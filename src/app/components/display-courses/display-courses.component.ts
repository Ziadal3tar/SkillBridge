import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CourseComponent } from "../course/course.component";

@Component({
  selector: 'app-display-courses',
  standalone: true,
  imports: [CommonModule, CourseComponent],
  templateUrl: './display-courses.component.html',
  styleUrl: './display-courses.component.scss'
})
export class DisplayCoursesComponent {
  filterTap:any ='All'

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

  ]
}
