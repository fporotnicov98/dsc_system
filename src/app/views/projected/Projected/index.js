import { inject } from 'mobx-react';
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
      <Projected ProjectStore={this.ProjectStore} />
    )
  }
}

export default ProjectedComponent;