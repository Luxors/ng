import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
// import { provideRouter } from '@angular/router';
// import routes from './app/routes';

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));

// bootstrapApplication(AppComponent,
//   {
//     providers: [
//       provideRouter(routes)
//     ]
//   }
// ).catch(err => console.error(err));
