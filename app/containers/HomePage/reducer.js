import produce from 'immer';
import {
  LOAD_EMPLOYEES,
  LOAD_EMPLOYEE_SUCCESS,
  LOAD_EMPLOYEE_ERROR,
  RESET,
  ADD_EMPLOYEE_ERROR,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  loaded: false,
  error: false,
  employees: undefined,
  loadingNewEmployee: false,
  newEmployee: undefined,
  newEmployeeAdded: false,
  newEmployeeError: false,
};

/* eslint-disable default-case, no-param-reassign */
const employeeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_EMPLOYEES:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_EMPLOYEE_SUCCESS:
        draft.employees = action.employees;
        draft.loading = false;
        draft.loaded = true;
        break;

      case LOAD_EMPLOYEE_ERROR:
        draft.error = action.error;
        break;

      case ADD_EMPLOYEE:
        draft.loadingNewEmployee = true;
        break;

      case ADD_EMPLOYEE_SUCCESS:
        draft.newEmployee = action.newEmployee;
        draft.newEmployeeAdded = true;
        break;

      case ADD_EMPLOYEE_ERROR:
        draft.newEmployeeError = action.error;
        break;

      case RESET:
        draft = initialState;
        break;
    }
  });

export default employeeReducer;
