import { inject } from 'mobx-react';
import React, { Component } from 'react';
import UserStore from 'app/stores/User/UserStore';
import NewUser from './NewUser';
import UpdateUser from './UpdateUser';

@inject(('AuthStore'))

class NewUserComponent extends Component {
  constructor(props) {
    super(props)

    const { AuthStore } = props

    this.UserStore = new UserStore({ AuthStore })
  }

  render() {
    const {
      openAdd,
      openUpdate,
      handleCloseAdd,
      handleCloseUpdate,
      action
    } = this.props
  
    if (action === 'update') {
      return (
        <UpdateUser
          UserStore={this.UserStore}
          open={openUpdate}
          handleClose={handleCloseUpdate}
        />
      )
    }

    return (
        <NewUser
          UserStore={this.UserStore}
          open={openAdd}
          handleClose={handleCloseAdd}
        />
    )
  }
}

export default NewUserComponent;