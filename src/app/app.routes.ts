import { Routes } from '@angular/router';
import { RegistrationsComponent } from './components/registrations/registrations.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
export const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},

  { path: '*', redirectTo: 'home'},
  {
    path: 'register',
    component: RegistrationsComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
