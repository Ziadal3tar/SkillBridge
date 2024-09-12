import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { CourseComponent } from "../course/course.component";
import { ChooseUsComponent } from "../choose-us/choose-us.component";
import { EventsComponent } from "../events/events.component";
import { InstructorsComponent } from "../instructors/instructors.component";
import { FeedbackComponent } from "../feedback/feedback.component";
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NewsComponent } from "../news/news.component";
import { HeaderComponent } from "../header/header.component";
import { TrustByComponent } from "../trust-by/trust-by.component";
import { WishlistComponent } from "../dashboard-components/wishlist/wishlist.component";
import { WorldWideComponent } from "../world-wide/world-wide.component";
import { DisplayInstructorsComponent } from "../display-instructors/display-instructors.component";
import { NumbersComponent } from "../numbers/numbers.component";
import { DisplayCoursesComponent } from "../display-courses/display-courses.component";
import { CoursesCategoryComponent } from "../courses-category/courses-category.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselModule, CourseComponent, ChooseUsComponent, EventsComponent, InstructorsComponent, FeedbackComponent, FooterComponent, NewsComponent, HeaderComponent, TrustByComponent, WishlistComponent, WorldWideComponent, DisplayInstructorsComponent, NumbersComponent, DisplayCoursesComponent, CoursesCategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {




  banner1Transform: string = '';
  banner2Transform: string = '';
  banner3Transform: string = '';

  onMouseMove(event: MouseEvent) {
    const movementFactor = 0.04;
    const moveX = event.clientX * movementFactor;
    this.banner1Transform = `translateX(${moveX}px)`;
    this.banner2Transform = `translateX(${moveX}px)`;
    this.banner3Transform = `translateX(${moveX}px)`;
  }




}
