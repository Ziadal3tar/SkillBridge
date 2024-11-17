import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { EventsComponent } from "../../components/events/events.component";

@Component({
  selector: 'app-eventsTap',
  standalone: true,
  imports: [FooterComponent, EventsComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class eventsTapComponent {

}
