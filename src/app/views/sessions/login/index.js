import { inject } from 'mobx-react';
import React, { Component } from 'react';
import Login from './Login';

@inject(({ AuthStore }) => {
  return {
    changeHandler: AuthStore.changeHandler,
    loginHandler: AuthStore.loginHandler,
    loading: AuthStore.loading,
    userData: AuthStore.userData,
    message: AuthStore.message,
    isAuthenticated: AuthStore.isAuthenticated,
    notify: AuthStore.notify
  }
})

class LoginComponent extends Component {
  render() {
    const {
      changeHandler,
      loginHandler,
      loading,
      userData,
      message,
      isAuthenticated,
      notify
    } = this.props;

    return (
      <React.Fragment>
        <Login
          changeHandler={changeHandler}
          loginHandler={loginHandler}
          loading={loading}
          userData={userData}
          message={message}
          isAuthenticated={isAuthenticated}
          notify={notify}
        />
      </React.Fragment>
    )
  }
}

export default LoginComponent;