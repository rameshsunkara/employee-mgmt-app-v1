import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import EmployeeList from '../../components/EmployeeList';

export default function HomePage() {
  return (
    <React.Fragment>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <EmployeeList data={[{ firstName: 'ramesh' }]} />
    </React.Fragment>
  );
}
