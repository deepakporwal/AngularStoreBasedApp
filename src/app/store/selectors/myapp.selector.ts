import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MyAppState } from '../myapp.state';

// Feature selector
export const selectMyAppState = createFeatureSelector<MyAppState>('myapp');

// Example selector: select a property called 'user' from MyAppState
export const selectMyAppUser = createSelector(
    selectMyAppState,
    (state: MyAppState) => state.user
);

// Add more selectors as needed