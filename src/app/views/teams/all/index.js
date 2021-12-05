import { inject } from 'mobx-react';
import React, { Component } from 'react';
import AllTeams from './AllTeams';
import UserStore from 'app/stores/User/UserStore';

@inject(('AuthStore'))

class TeamsComponent extends Component {
  constructor(props) {
    super(props)

    const { AuthStore } = props

    this.UserStore = new UserStore({ AuthStore })
  }

  render() {
    return (
        <AllTeams 
          UserStore={this.UserStore}
        />
    )
  }
}

export default TeamsComponent;