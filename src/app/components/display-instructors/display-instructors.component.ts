import { Component } from '@angular/core';
import { InstructorsComponent } from "../instructors/instructors.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-instructors',
  standalone: true,
  imports: [InstructorsComponent,CommonModule],
  templateUrl: './display-instructors.component.html',
  styleUrl: './display-instructors.component.scss'
})
export class DisplayInstructorsComponent {
  Instructors:any[]=[
    {
      imgSrc:'./assets/instractor1.jpg',
      name:'Yousuf White',
      jobTitle:'UI/UX Exparet',
    },
    {
      imgSrc:'./assets/instractor2.jpg',
      name:'Elizabeth Olsen',
      jobTitle:'Assistant Teacher',
    },
    {
      imgSrc:'./assets/instractor3.jpg',
      name:'Jons Emon',
      jobTitle:'Assistant Teacher',
    },
    {
      imgSrc:'./assets/instractor4.jpg',
      name:'Mahmud Sujons',
      jobTitle:'Instructor',
    },
  ]
}
