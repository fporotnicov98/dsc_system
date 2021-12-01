import { api } from 'config';
import history from 'history.js'
import { action, makeObservable, observable, runInAction } from "mobx";

class ProjectStore {
  AuthStore

  @observable projectData = {
    projectName: '',
    repository: '',
    description: '',
    createdDate: new Date(),
    status: 'создан',
    teams: [],
    edited: '',
    editedDate: ''
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

  getProjects = async () => {
    try {
      const {
        token,
        request
      } = this.AuthStore

      const data = await request(`${api}/api/projects`, 'GET', null, {
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

      const data = await request(`${api}/api/projects/${projectId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })

      runInAction(() => {
        this.setProjectData(data)        
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

      await request(`${api}/api/projects/addProject`, 'POST', { ...this.projectData }, { Authorization: `Bearer ${token}` })

      history.push('/projects')

    } catch (error) {
      console.log(error)
    }
  }

  @action updateProject = async (projectId) => {
    try {
      const {
        request
      } = this.AuthStore

      const data = await request(`${api}/api/projects/updateProject/${projectId}`, 'PUT')
      
      window.notify({
        variant: 'success',
        message: data.message
      })
    } catch (error) {
      window.notify({
        variant: 'success',
        message: error
      })
    }
  }

  @action deleteProject = async (projectId) => {
    try {
      const {
        request
      } = this.AuthStore

      const data = await request(`${api}/api/projects/deleteProject/${projectId}`, 'DELETE')
      
      window.notify({
        variant: 'success',
        message: data.message
      })

      history.push('/projects')

    } catch (error) {
      window.notify({
        variant: 'success',
        message: error
      })
    }
  }
}

export default ProjectStore;