import { bootstrapApplication } from '@angular/platform-browser';
import { mergeApplicationConfig } from '@angular/core';
import { appConfig } from './app/app.config';
import { provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

const clientConfig = mergeApplicationConfig(appConfig, { providers: [provideClientHydration()] });

bootstrapApplication(AppComponent, clientConfig)
  .catch((err) => console.error(err));
