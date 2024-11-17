import { Component } from '@angular/core';
import { DisplayCoursesComponent } from "../../components/display-courses/display-courses.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [DisplayCoursesComponent, FooterComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
