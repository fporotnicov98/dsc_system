import React from 'react';
import CustomerDetails from './layout/CustomerDetails';

const SuperAdminProfile = (props) => {
  return (
    <div className="m-sm-30">
      <CustomerDetails {...props} />
    </div>
  );
}

export default SuperAdminProfile;