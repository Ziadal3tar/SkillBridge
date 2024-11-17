import { Component } from '@angular/core';
import { WorldWideComponent } from "../../components/world-wide/world-wide.component";
import { NumbersComponent } from "../../components/numbers/numbers.component";
import { FeedbackComponent } from "../../components/feedback/feedback.component";
import { ChooseUsComponent } from "../../components/choose-us/choose-us.component";
import { DisplayInstructorsComponent } from "../../components/display-instructors/display-instructors.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [WorldWideComponent, NumbersComponent, FeedbackComponent, ChooseUsComponent, DisplayInstructorsComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
