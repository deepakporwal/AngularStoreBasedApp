import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../services/user-service/user';
import * as MyAppActions from '../actions/myapp.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MyAppEffects {
    addUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MyAppActions.addUser),
            mergeMap(action =>
                this.userService.addUser(action.user).pipe(
                    map(user => MyAppActions.addUserSuccess({ user })),
                    catchError(error => of(MyAppActions.addUserFailure({ error })))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) {}
}