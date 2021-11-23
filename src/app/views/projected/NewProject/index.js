import { inject, Provider } from 'mobx-react';
import React, { Component } from 'react';
import ProjectStore from 'app/stores/Project/ProjectStore';
import NewProject from './NewProject';

@inject(('AuthStore'))

class AddProjectComponent extends Component {
  constructor(props) {
    super(props)

    const { AuthStore } = props

    this.ProjectStore = new ProjectStore({ AuthStore })
  }

  render() {
    return (
      <Provider ProjectStore={this.ProjectStore}>
        <NewProject />
      </Provider>

    )
  }
}

export default AddProjectComponent;