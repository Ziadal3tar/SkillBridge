import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  liActive:any
  sideNavLiActive:any
  openSideNav:boolean = false
  closeSideNavLi(item:any){
    if (this.sideNavLiActive == item) {
this.sideNavLiActive = ''
    }else{
      this.sideNavLiActive = item
    }
  }
}
