import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NoDataComponent } from "../../no-data/no-data.component";

@Component({
  selector: 'app-enrolled',
  standalone: true,
  imports: [CommonModule, NoDataComponent],
  templateUrl: './enrolled.component.html',
  styleUrl: './enrolled.component.scss'
})
export class EnrolledComponent {
tap:any = 'Enrolled'
}
