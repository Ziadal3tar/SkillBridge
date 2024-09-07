import { Component } from '@angular/core';
import { NoDataComponent } from "../../no-data/no-data.component";

@Component({
  selector: 'app-my-quiz-attempts',
  standalone: true,
  imports: [NoDataComponent],
  templateUrl: './my-quiz-attempts.component.html',
  styleUrl: './my-quiz-attempts.component.scss'
})
export class MyQuizAttemptsComponent {

}
