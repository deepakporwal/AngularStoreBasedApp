import {createReducer, on} from '@ngrx/store';
import {loadData, loadDataSuccess, loadDataFailure, addUser, addUserSuccess, addUserFailure} from '../actions/myapp.actions';
import {MyAppState} from '../myapp.state';
import {User} from '../myapp.state';

export const initialState: MyAppState = {
    user: [],
    isAuthenticated: false,
    isLoaded: true,
    error: null
};

export const myAppReducer = createReducer(
    initialState,
    on(loadData, state => ({
        ...state,
        isLoaded: false,
        error: null
    })),
    on(addUser, (state, {user}) => ({
        ...state,
        user: [...state.user, user],
    })),
    on(addUserSuccess, (state, {user}) => ({
        ...state,
        user: [...state.user, user],
        error: null
    })),
    on(addUserFailure, (state, {error}) => ({
        ...state,
        error: error
    }))
);