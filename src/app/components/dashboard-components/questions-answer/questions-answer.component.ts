import { Component } from '@angular/core';
import { NoDataComponent } from "../../no-data/no-data.component";

@Component({
  selector: 'app-questions-answer',
  standalone: true,
  imports: [NoDataComponent],
  templateUrl: './questions-answer.component.html',
  styleUrl: './questions-answer.component.scss'
})
export class QuestionsAnswerComponent {

}
