import history from 'history.js'
import { action, makeObservable, observable, runInAction } from "mobx";

class ProjectStore {
  AuthStore

  @observable projectData = {
    projectName: '',
    repository: '',
    description: '',
    date: new Date(),
    status: 'создан'
  }

  @observable allProject = null

  constructor({ AuthStore }) {
    makeObservable(this);
    this.AuthStore = AuthStore || {}
  }

  @action setProjectData = (projectData) => {
    this.projectData = projectData
  }

  @action setProjects = (projects) => {
    this.allProject = projects
  }

  @action changeHandler = (event) => {
    this.setProjectData({ ...this.projectData, [event.target.name]: event.target.value })
  }

  getAllProjects = async () => {
    try {
      const {
        token,
        request
      } = this.AuthStore

      const data = await request('/api/project', 'GET', null, {
        Authorization: `Bearer ${token}`
      })

      runInAction(() => {
        this.setProjects(data)
      })

    } catch (e) {
      console.log(e)
    }
  }

  @action addProject = async () => {
    try {
      const {
        token,
        request
      } = this.AuthStore

        await request('/api/project/addProject', 'POST', { ...this.projectData }, { Authorization: `Bearer ${token}` })

        history.push('/projected/all-projects')
      

    } catch (error) {
      console.log(error)
    }
  }
}

export default ProjectStore;