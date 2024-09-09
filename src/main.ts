import {bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';

import { AppComponent } from './app/app.component';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { importProvidersFrom,ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appConfig: ApplicationConfig = {

  providers: [
    provideRouter(routes, withHashLocation()),
    provideHttpClient(),
    importProvidersFrom(FormsModule, ReactiveFormsModule),
    provideAnimations()
  ]
};
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));



