import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { LazyElementsModule } from '@angular-extensions/elements';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { environment } from './environments/environment';

import { AppComponent } from './app/app.component';
import { RootErrorComponent } from './app/shared/root-error/root-error.component';
import {
  provideRouter,
  ROUTER_CONFIGURATION,
  withInMemoryScrolling,
  withRouterConfig,
} from '@angular/router';
import { HIGHLIGHT_JS_PROVIDER } from './app/core/higlightjs/highlightjs.config';
import { ROUTES } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    {
      provide: ROUTER_CONFIGURATION,
      useValue: {
        useHash: true,
        scrollOffset: [0, 100],
      },
    },
    provideRouter(
      ROUTES,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
      withRouterConfig({
        onSameUrlNavigation: 'reload',
      }),
    ),
    importProvidersFrom(
      LazyElementsModule.forRoot({
        rootOptions: {
          errorComponent: RootErrorComponent,
        },
      }),
    ),
    HIGHLIGHT_JS_PROVIDER,
    importProvidersFrom(
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
      }),
    ),
    importProvidersFrom(MatSnackBarModule),
  ],
}).catch((err) => console.error(err));
