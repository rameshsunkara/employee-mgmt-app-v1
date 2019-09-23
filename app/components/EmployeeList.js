import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const columns = [
  {
    Header: 'Name',
    accessor: 'firstName',
  },
];

const EmployeeList = props => {
  const { loading, error, employees } = props || {};
  console.log('In List:', props);
  if (!employees || (employees && employees.length <= 0)) {
    return 'No Employees';
  }

  if (error) {
    return 'Error Loading Employee Data';
  }
  return <ReactTable data={employees} columns={columns} loading={loading} />;
};

EmployeeList.propTypes = {
  employees: PropTypes.any,
  loading: PropTypes.bool,
  error: PropTypes.any,
};

export default EmployeeList;
