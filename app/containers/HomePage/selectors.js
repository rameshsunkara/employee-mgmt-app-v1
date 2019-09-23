import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectHome,
    homeState => homeState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectHome,
    homeState => homeState.error,
  );

const makeSelectEmployees = () =>
  createSelector(
    selectHome,
    homeState => homeState.employees,
  );

export { selectHome, makeSelectLoading, makeSelectError, makeSelectEmployees };
