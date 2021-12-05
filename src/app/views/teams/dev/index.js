import { inject } from 'mobx-react';
import React, { Component } from 'react';
import UserStore from 'app/stores/User/UserStore';
import DevTeam from './DevTeam';

@inject(('AuthStore'))

class DevTeamsComponent extends Component {
  constructor(props) {
    super(props)

    const { AuthStore } = props

    this.UserStore = new UserStore({ AuthStore })
  }

  render() {
    return (
        <DevTeam 
          UserStore={this.UserStore}
        />
    )
  }
}

export default DevTeamsComponent;