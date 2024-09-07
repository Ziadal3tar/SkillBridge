import { Component } from '@angular/core';
import { Dashboard1Component } from "../dashboard-components/dashboard-1/dashboard-1.component";
import { ProfileComponent } from "../dashboard-components/profile/profile.component";
import { EnrolledComponent } from "../dashboard-components/enrolled/enrolled.component";
import { WishlistComponent } from "../dashboard-components/wishlist/wishlist.component";
import { ReviewsComponent } from "../dashboard-components/reviews/reviews.component";
import { OrderComponent } from "../dashboard-components/order/order.component";
import { SettingComponent } from "../dashboard-components/setting/setting.component";
import { MyQuizAttemptsComponent } from "../dashboard-components/my-quiz-attempts/my-quiz-attempts.component";
import { CommonModule } from '@angular/common';
import { QuestionsAnswerComponent } from "../dashboard-components/questions-answer/questions-answer.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Dashboard1Component, ProfileComponent, EnrolledComponent, WishlistComponent, ReviewsComponent, OrderComponent, SettingComponent, MyQuizAttemptsComponent, CommonModule, QuestionsAnswerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  tap :any = 'setting'
  Logout(){

  }
}
