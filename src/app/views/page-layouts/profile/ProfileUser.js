import { MatxLoading } from 'app/components';
import React from 'react';
import SuperAdminProfile from './SuperAdminProfile';

const ProfileUser = (props) => {
  const {
    userData
  } = props

  if (!userData) {
    return <MatxLoading />
  }

  if (userData.role === 'SA') {
    return <SuperAdminProfile {...props} />
  }

  return <SuperAdminProfile {...props} />
}

export default ProfileUser;