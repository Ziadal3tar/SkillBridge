import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApolloModule } from 'apollo-angular';
// import { apolloProviders } from './pollo.config';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ApolloModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // providers: [apolloProviders],  

})
export class AppComponent {
  title = 'Edu-fe';
}
