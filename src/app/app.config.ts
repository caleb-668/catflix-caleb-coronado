import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'proyectuseless',
        appId: '1:571381492735:web:41fe321c67ae04f3bbd5ca',
        storageBucket: 'proyectuseless.appspot.com',
        apiKey: 'AIzaSyBOVZ6xemNAYe01c2l9bLxYe6nWqHpoixs',
        authDomain: 'proyectuseless.firebaseapp.com',
        messagingSenderId: '571381492735',
      })
    ),
    provideAuth(() => getAuth()),
    provideAnimationsAsync(),
  ],
};
