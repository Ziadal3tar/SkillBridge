import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-instructors',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './instructors.component.html',
  styleUrl: './instructors.component.scss'
})
export class InstructorsComponent {
@Input() instructors:any
}
