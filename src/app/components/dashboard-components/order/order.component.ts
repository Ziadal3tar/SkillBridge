import { Component } from '@angular/core';
import { NoDataComponent } from "../../no-data/no-data.component";

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [NoDataComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

}
