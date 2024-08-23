import { Routes } from '@angular/router';
import { RegistrationsComponent } from './components/registrations/registrations.component';
export const routes: Routes = [
  {path:'',redirectTo:"register",pathMatch:'full'},

  { path: '*', redirectTo: 'register'},
  {
    path: 'register',
    component: RegistrationsComponent,
  },
];
