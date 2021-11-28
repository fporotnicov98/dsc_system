import { inject } from 'mobx-react';
import React, { Component } from 'react';
import ProjectStore from 'app/stores/Project/ProjectStore';
import Project from './Project';

@inject(('AuthStore'))

class ViewProjectComponent extends Component {
  constructor(props) {
    super(props)

    const { AuthStore } = props

    this.ProjectStore = new ProjectStore({ AuthStore })
  }

  render() {
    return (
        <Project ProjectStore={this.ProjectStore} />
    )
  }
}

export default ViewProjectComponent;