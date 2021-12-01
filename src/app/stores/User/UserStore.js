import { api } from "config"
import { makeObservable, observable, action, runInAction } from "mobx";
import ProjectStore from "../Project/ProjectStore";


class UserStore {
  @observable userInfo = {}
  @observable users = null

  AuthStore
  ProjectStore

  constructor({ AuthStore }) {
    makeObservable(this);
    this.AuthStore = AuthStore || {}

    this.ProjectStore = new ProjectStore({ AuthStore: this })
  }

  @action setUserInfo = (userInfo) => {
    this.userInfo = userInfo
  }

  @action setUsers = (users) => {
    this.users = users
  }

  //login 
  @action userHandler = (event) => {
    this.setUserInfo({ ...this.userInfo, [event.target.name]: event.target.value })
  }

  registerUser = async () => {
    try {
      const {
        request,
        token
      } = this.AuthStore

      const data = await request(`${api}/api/auth/memberRegister`, 'POST', { ...this.userInfo }, { Authorization: `Bearer ${token}` })
      console.log(data.user)

      window.notify({
        variant: 'warning',
        message: data.message
      })

    } catch (error) {
      console.error('Что-то пошло не так', error)
    }
  }

  updateUser = async (userId) => {
    try {
      const {
        request,
        token
      } = this.AuthStore

      const data = await request(`${api}/api/auth/updateUser`, 'POST', { ...this.userInfo }, { Authorization: `Bearer ${token}` })
      console.log(data.user)

      window.notify({
        variant: 'warning',
        message: data.message
      })

    } catch (error) {
      console.error('Что-то пошло не так', error)
    }
  }

  getUsers = async () => {
    try {
      const {
        token,
        request
      } = this.AuthStore

      const data = await request(`${api}/api/users`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })

      runInAction(() => {
        this.setUsers(data)
      })

    } catch (e) {
      console.log(e)
    }
  }
}

export default UserStore