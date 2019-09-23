import produce from 'immer';
import {
  LOAD_EMPLOYEES,
  LOAD_EMPLOYEE_SUCCESS,
  LOAD_EMPLOYEE_ERROR,
  RESET,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  employees: undefined,
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
        break;

      case LOAD_EMPLOYEE_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case RESET:
        draft = initialState;
        break;
    }
  });

export default employeeReducer;
