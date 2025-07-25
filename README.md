# AngularStoreBasedApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

ng add @ngrx/effects@latest
# or
npm install @ngrx/effects


import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MyApiService } from '../services/my-api.service';
import { MyActions } from './my.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

export const loadItems$ = createEffect(
  (actions$ = inject(Actions), apiService = inject(MyApiService)) => 
    actions$.pipe(
      ofType(MyActions.loadItems),                // listen for loadItems action
      mergeMap(() => 
        apiService.getItems().pipe(
          map(items => MyActions.loadItemsSuccess({ items })),
          catchError(error => of(MyActions.loadItemsFailure({ error })))
        )
      )
    ),
  { functional: true }  // recommended effect style for Standalone/Angular 19+
);


import { provideEffects } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { MyEffects } from './effects/my.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideEffects(MyEffects)
  ]
});


import { EffectsModule } from '@ngrx/effects';
import { MyEffects } from './effects/my.effects';

@NgModule({
  imports: [
    EffectsModule.forRoot([MyEffects])
  ]
})
export class AppModule {}


import { Store } from '@ngrx/store';
import { MyActions } from './store/my.actions';

constructor(private store: Store) {}

ngOnInit() {
  this.store.dispatch(MyActions.loadItems());
}

