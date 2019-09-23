import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const columns = [
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Role',
    accessor: 'role',
  },
  {
    Header: 'Hire Date',
    accessor: 'hireDate',
  },
];

const EmployeeList = ({ loading, error, employees }) => {
  if (!employees || (employees && employees.length <= 0)) {
    return 'No Employees';
  }

  if (error) {
    return 'Error Loading Employee Data';
  }
  return (
    <div style={{ margin: 50 }}>
      <ReactTable data={employees} columns={columns} loading={loading} />
    </div>
  );
};

EmployeeList.propTypes = {
  employees: PropTypes.any,
  loading: PropTypes.bool,
  error: PropTypes.any,
};

export default EmployeeList;
