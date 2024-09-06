import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module'; // Importa AppRoutingModule
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';



bootstrapApplication(AppComponent, {
  providers: [
    AppRoutingModule,          // Proporciona el módulo de rutas
    provideRouter([]),         // Proporciona las rutas vacías (o puedes integrar directamente aquí las rutas)
    provideHttpClient(),       // Proporciona el HttpClient para toda la aplicación
    { provide: 'APP_CONFIG', useValue: appConfig } // Proporciona configuración adicional
  ]
}).catch(err => console.error(err));
