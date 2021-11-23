import { inject } from 'mobx-react';
import React, { Component } from 'react';
import Register from './Register';

@inject(({AuthStore}) => {
  return {
    changeHandler: AuthStore.changeHandler,
    registerHandler: AuthStore.registerHandler,
    loading: AuthStore.loading,
    userData: AuthStore.userData,
    message: AuthStore.message,
    notify: AuthStore.notify
  }
})

class RegisterComponent extends Component {
  render() {
    const {
      changeHandler,
      registerHandler,
      loading,
      userData,
      message,
      notify
    } = this.props;

    return (
      <Register
        changeHandler={changeHandler}
        registerHandler={registerHandler}
        loading={loading}
        userData={userData}
        message={message}
        notify={notify}
      />
    )
  }
}

export default RegisterComponent;