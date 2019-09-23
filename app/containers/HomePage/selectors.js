import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectEmployees = () =>
  createSelector(
    selectGlobal,
    globalState => (globalState.home && globalState.home.employees) || {},
  );

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectEmployees,
};
