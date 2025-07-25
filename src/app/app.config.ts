import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { myAppReducer } from './store/reducers/myapp.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { MyAppEffects } from './store/effects/myapp.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(StoreModule.forRoot({ myApp: myAppReducer })),
    importProvidersFrom(StoreDevtoolsModule.instrument()),    
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ]
};
