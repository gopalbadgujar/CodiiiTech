import { bootstrapApplication } from '@angular/platform-browser';
import { mergeApplicationConfig } from '@angular/core';
import { appConfig } from './app/app.config';
import { provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

const clientConfig = mergeApplicationConfig(appConfig, {
  providers: [
    provideClientHydration(),
    provideRouter(routes) // just routes
  ]
});

bootstrapApplication(AppComponent, clientConfig)
  .catch((err) => console.error(err));