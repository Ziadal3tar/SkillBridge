import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  liActive: any;
  sideNavLiActive: any;
  openSideNav: boolean = false;
  constructor(private _Router: Router) {}
  closeSideNavLi(item: any) {
    if (this.sideNavLiActive == item) {
      this.sideNavLiActive = '';
    } else {
      this.sideNavLiActive = item;
    }
  }
  router(page: any) {
 this.openSideNav= false
    this._Router.navigate([`/${page}`]);
  }
}
