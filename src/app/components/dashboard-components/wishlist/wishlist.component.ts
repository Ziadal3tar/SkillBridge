import { Component } from '@angular/core';
import { NoDataComponent } from "../../no-data/no-data.component";

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [NoDataComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {

}
