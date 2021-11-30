import { inject } from 'mobx-react';
import React, { Component } from 'react';
import UserStore from 'app/stores/User/UserStore';
import NewUser from './NewUser';

@inject(('AuthStore'))

class NewUserComponent extends Component {
  constructor(props) {
    super(props)

    const { AuthStore } = props

    this.UserStore = new UserStore({ AuthStore })
  }

  render() {
    const {
      open,
      handleClose
    } = this.props
  
    return (
        <NewUser
          UserStore={this.UserStore}
          open={open}
          handleClose={handleClose}
        />
    )
  }
}

export default NewUserComponent;