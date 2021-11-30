import { inject } from 'mobx-react';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ProfileUser from './ProfileUser';

@inject (({AuthStore}) => {
  return {
    userData: AuthStore.user,
    isAuthenticated: AuthStore.isAuthenticated
  }
})

class Profile extends Component {
  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to={'/session/signin'} />
    }

    return (
      <ProfileUser {...this.props} />
    );
  }
}

export default Profile;