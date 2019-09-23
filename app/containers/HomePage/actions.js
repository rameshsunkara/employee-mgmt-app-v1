import {
  LOAD_EMPLOYEES,
  LOAD_EMPLOYEE_SUCCESS,
  LOAD_EMPLOYEE_ERROR,
  RESET,
} from './constants';

export function loadEmployees() {
  return {
    type: LOAD_EMPLOYEES,
  };
}

export function employeesLoaded(employees) {
  return {
    type: LOAD_EMPLOYEE_SUCCESS,
    employees,
  };
}

export function employeesLoadingError(error) {
  return {
    type: LOAD_EMPLOYEE_ERROR,
    error,
  };
}

export function resetEmployeesList() {
  return {
    type: RESET,
  };
}
