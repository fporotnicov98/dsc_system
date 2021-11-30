import UserStore from 'app/stores/User/UserStore';
import { inject } from 'mobx-react';
import React, { Component } from 'react';
import UserList from './UserList';

@inject(('AuthStore'))

class UsersComponent extends Component {
  constructor(props) {
    super(props)

    const { AuthStore } = props

    this.UserStore = new UserStore({ AuthStore })
  }

  render() {
    return (
      <UserList
        UserStore={this.UserStore}
      />
    );
  }
}

export default UsersComponent;