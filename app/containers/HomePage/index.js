import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import EmployeeList from 'components/EmployeeList';
import {
  makeSelectEmployees,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadEmployees } from './actions';

const key = 'home';

export function HomePage({
  loading,
  error,
  employees,
  getEmployeesList,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (!employees) {
      getEmployeesList();
    }
  }, []);

  return (
    <React.Fragment>
      <h2>Employee List</h2>
      <EmployeeList loading={loading} error={error} employees={employees} />
    </React.Fragment>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  employees: PropTypes.array,
  getEmployeesList: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  employees: makeSelectEmployees(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getEmployeesList: () => {
      dispatch(loadEmployees());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
