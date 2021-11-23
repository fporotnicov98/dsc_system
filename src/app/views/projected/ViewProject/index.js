import { inject, Provider } from 'mobx-react';
import React, { Component } from 'react';
import ProjectStore from 'app/stores/Project/ProjectStore';
import ViewProject from './ViewProject';

@inject(('AuthStore'))

class ViewProjectComponent extends Component {
  constructor(props) {
    super(props)

    const { AuthStore } = props

    this.ProjectStore = new ProjectStore({ AuthStore })
  }

  render() {
    return (
      // <Provider ProjectStore={this.ProjectStore}>
        <ViewProject ProjectStore={this.ProjectStore} />
      // </Provider>

    )
  }
}

export default ViewProjectComponent;