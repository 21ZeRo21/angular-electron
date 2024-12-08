import { APP_CONFIG } from './environments/environment';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

if (APP_CONFIG.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err: any) => console.error(err));
