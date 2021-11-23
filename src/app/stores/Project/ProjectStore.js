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

  @observable project = []

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

  @action setProject = (project) => {
    this.project = project
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

  getProject = async (projectId) => {
    try {
      const {
        token,
        request
      } = this.AuthStore

      const data = await request(`/api/project/${projectId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })

      runInAction(() => {
        this.setProject(data)        
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

      history.push('/projects')

    } catch (error) {
      console.log(error)
    }
  }
}

export default ProjectStore;