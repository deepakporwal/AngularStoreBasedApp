import { createAction, props } from '@ngrx/store';
import { MyAppActionTypes } from './myapp.action';
import { User } from '../myapp.state';

export const loadData = createAction(MyAppActionTypes.LOAD_DATA);
export const loadDataSuccess = createAction(MyAppActionTypes.LOAD_DATA_SUCCESS);
export const loadDataFailure = createAction(MyAppActionTypes.LOAD_DATA_FAILURE);
export const addUser = createAction(MyAppActionTypes.ADD_USER, props<{ user: User }>());
export const addUserSuccess = createAction(MyAppActionTypes.ADD_USER_SUCCESS, props<{ user: User }>());
export const addUserFailure = createAction(MyAppActionTypes.ADD_USER_FAILURE, props<{ error: string }>());