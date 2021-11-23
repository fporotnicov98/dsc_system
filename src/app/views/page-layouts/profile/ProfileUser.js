import React from 'react';
import SuperAdminProfile from './SuperAdminProfile';

const ProfileUser = (props) => {
  const {
    userData
  } = props

  return (
    userData.role && userData.role === 'SA' && (
      <SuperAdminProfile {...props} />
    )
  );
}

export default ProfileUser;