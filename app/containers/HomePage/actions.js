import {
  LOAD_EMPLOYEES,
  LOAD_EMPLOYEE_SUCCESS,
  LOAD_EMPLOYEE_ERROR,
  RESET,
  ADD_EMPLOYEE,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_ERROR,
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

export function addEmployee() {
  return {
    type: ADD_EMPLOYEE,
  };
}

export function employeesAdded(employees) {
  return {
    type: ADD_EMPLOYEE_SUCCESS,
    employees,
  };
}

export function errorAddingEmployee(error) {
  return {
    type: ADD_EMPLOYEE_ERROR,
    error,
  };
}
