import { Component } from '@angular/core';
import { NoDataComponent } from "../../no-data/no-data.component";

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [NoDataComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {

}
