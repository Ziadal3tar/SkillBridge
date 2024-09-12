import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-world-wide',
  standalone: true,
  imports: [],
  templateUrl: './world-wide.component.html',
  styleUrl: './world-wide.component.scss'
})
export class WorldWideComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    ngOnInit(): void {
    this.borderPlay();

  }
  borderPlay() {
    if (isPlatformBrowser(this.platformId)) {
      let border: any = document.getElementById('border');
      if (border) {
              setTimeout(() => {
          border.style.border = '1px solid #3a9ac0';
          border.style.padding = '50px';
          setTimeout(() => {
            border.style.border = '1px solid transparent';
            setTimeout(() => {
              border.style.padding = '0px';
              this.borderPlay();
            }, 2000);
          }, 1000);
        }, 2000);
      }
    }
  }
}
