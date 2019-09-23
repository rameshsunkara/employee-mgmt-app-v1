import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_EMPLOYEES, ADD_EMPLOYEE } from './constants';
import { employeesLoaded, employeesLoadingError } from './actions';

const requestURL = 'http://localhost:3000/api/employees/';

export function* getEmployees() {
  try {
    const employees = yield call(request, requestURL);
    yield put(employeesLoaded(employees.results));
  } catch (err) {
    yield put(employeesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* employeeData() {
  // Watches for LOAD_EMPLOYEES actions and calls getEmployees when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_EMPLOYEES, getEmployees);
}
