import { ApplicationConfig } from '@angular/core';
import { provideHttpClient,withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { PaisesComponent } from './paises/paises.component';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch())]
};
