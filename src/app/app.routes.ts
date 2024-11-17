import { Routes } from '@angular/router';
import { RegistrationsComponent } from './components/registrations/registrations.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './taps/about/about.component';
import { ContactComponent } from './taps/contact/contact.component';
import { ProfileComponent } from './taps/profile/profile.component';
import { eventsTapComponent } from './taps/events/events.component';
import { ShopComponent } from './taps/shop/shop.component';
eventsTapComponent
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegistrationsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutUs', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'events', component: eventsTapComponent },
  { path: 'shop', component: ShopComponent },
  { path: '**', redirectTo: 'home' },
];
