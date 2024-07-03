import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { firebaseProviders } from './app/firebase.config';
import { routes } from './app/app.routes';

export default bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    ...firebaseProviders 
  ]
});
