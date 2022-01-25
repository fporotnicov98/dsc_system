/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import NewUser from './NewUser';
import UpdateUser from './UpdateUser';
import { observer } from 'mobx-react-lite';

const NewUserComponent = observer((props) => {
  const {
    openAdd,
    openUpdate,
    handleCloseAdd,
    handleCloseUpdate,
    action,
    updateUserId,
    getUserById,
    UserStore: {
      userHandler,
      updateUser,
      registerUser,
      userInfo
    }
  } = props

  useEffect(() => {
    getUserById(updateUserId);
  }, [getUserById, updateUserId])

  if (action === 'update') {
    return (
      <UpdateUser
        open={openUpdate}
        handleClose={handleCloseUpdate}
        updateUserId={updateUserId}
        getUserById={getUserById}
        userHandler={userHandler}
        updateUser={updateUser}
        userInfo={userInfo}
      />
    )
  }

  return (
    <NewUser
      open={openAdd}
      handleClose={handleCloseAdd}
      userHandler={userHandler}
      registerUser={registerUser}
      userInfo={userInfo}
    />
  )
})

export default NewUserComponent;