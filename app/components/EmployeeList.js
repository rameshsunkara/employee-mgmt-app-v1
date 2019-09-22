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

const EmployeeList = ({ data }) => {
  if (data && data.length <= 0) {
    return 'No Employees';
  }
  return <ReactTable data={data} columns={columns} />;
};

EmployeeList.propTypes = {
  data: PropTypes.any,
};

export default EmployeeList;
