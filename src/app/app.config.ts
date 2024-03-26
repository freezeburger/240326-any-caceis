import { APP_INITIALIZER, ApplicationConfig, PLATFORM_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Contexte
    { provide: PLATFORM_INITIALIZER, useValue: () => console.log('1. Platform Ready'), multi: true },
    // Configuration
    { provide: APP_INITIALIZER, useValue: () => console.log('1. Application Ready'), multi: true },
    provideRouter(routes)
  ]
};
