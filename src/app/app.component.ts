import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApolloModule } from 'apollo-angular';
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { RegistrationsComponent } from "./components/registrations/registrations.component";
// import { apolloProviders } from './pollo.config';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ApolloModule, NavComponent, HomeComponent, RegistrationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // providers: [apolloProviders],

})
export class AppComponent {
  title = 'Edu-fe';
}
