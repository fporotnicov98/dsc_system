import { inject } from 'mobx-react';
import React, { Component } from 'react';
import AuthGuard from './AuthGuard';

@inject('AuthStore')

class Auth extends Component {
  render() {
    const {
      AuthStore: {
        isAuthenticated
      }
  } = this.props

    return (
      <AuthGuard
        isAuthenticated={isAuthenticated}
        {...this.props}
      />
    );
  }
}

export default Auth;