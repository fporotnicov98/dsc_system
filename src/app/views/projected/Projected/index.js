import { inject, Provider } from 'mobx-react';
import React, { Component } from 'react';
import Projected from './Projected';
import ProjectStore from 'app/stores/Project/ProjectStore';

@inject(('AuthStore'))

class ProjectedComponent extends Component {
  constructor(props) {
    super(props)

    const { AuthStore } = props

    this.ProjectStore = new ProjectStore({ AuthStore })
  }

  render() {
    return (
      <Provider ProjectStore={this.ProjectStore}>
        <Projected />
      </Provider>

    )
  }
}

export default ProjectedComponent;