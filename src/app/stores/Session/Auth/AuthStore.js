import { action, observable, makeObservable } from 'mobx';
import history from 'history.js'
import ProjectStore from '../../Project/ProjectStore'
import {api} from 'config';

class AuthStore {
  @observable loading = false
  @observable message = null
  @observable notify = {
    openSnack: false,
    variant: 'success'
  }

  @observable token = null
  @observable userId = null

  @observable isAuthenticated = false

  @observable userData = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    remember: true,
    role: 'SA'
  }

  ProjectStore = {}
  storageName = 'userData'

  constructor() {
    makeObservable(this);

    this.ProjectStore = new ProjectStore({ AuthStore: this })
  }

  @action setLoading = (loading) => {
    this.loading = loading
  }

  @action setMessage = (err) => {
    this.message = err
  }

  @action setUserData = (userData) => {
    this.userData = userData
  }

  @action setToken = (token) => {
    this.token = token
  }

  @action setUserId = (userId) => {
    this.userId = userId
  }

  @action setAuth = (auth) => {
    this.isAuthenticated = auth
  }

  @action setOpen = (notify) => {
    this.notify = notify
  }

  clearError = () => {
    this.setMessage(null)
  }

  request = async (url, method, body = null, headers = {}) => {
    this.setLoading(true)

    try {
      if (body) {
        body = JSON.stringify(body)
        headers['Content-type'] = 'application/json'
      }

      const response = await fetch(url, { method, body, headers })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так')
      }

      this.setLoading(false)

      return data
    } catch (e) {
      this.setLoading(false)
      this.setOpen({ openSnack: true, variant: 'error' })
      this.setMessage(e.message)
      throw e
    }
  }

  //login 
  @action changeHandler = (event) => {
    this.setUserData({ ...this.userData, [event.target.name]: event.target.value })
  }

  @action loginHandler = async () => {
    try {
      const data = await this.request(`${api}/api/auth/login`, 'POST', { ...this.userData })
      this.login(data.token, data.userId)
    } catch (e) {
      console.error('Что-то пошло не так')
    }
  }

  //register
  @action registerHandler = async () => {
    try {
      const data = await this.request(`${api}/api/auth/register`, 'POST', { ...this.userData })
      this.setMessage(data.message)
      this.setOpen({ openSnack: true, variant: 'success' })
      history.push('/session/signin')
    } catch (e) {
      console.error('Что-то пошло не так');
    }
  }

  login = (jwtToken, id) => {
    if (jwtToken) {
      this.setToken(jwtToken)
      this.setUserId(id)
      this.getAuth(jwtToken)
      localStorage.setItem(this.storageName, JSON.stringify({
        userId: id, token: jwtToken,
      }))
    }
  }

  logout = () => {
    this.setToken(null)
    this.setUserId(null)
    this.setAuth(false)
    localStorage.removeItem(this.storageName)
  }

  getAuth = async (token) => {
    try {
      const data = await this.request(
        `${api}/api/auth/me`,
        'GET',
        null,
        { 'Authorization': `Bearer ${token}` }
      )

      this.setUserData(data.user)
      this.setMessage(data.message)
      this.setOpen({ openSnack: true, variant: 'success' })
      this.setAuth(data.isAuth)
    } catch (e) {
      console.log(e)
    }
  }
}

export default AuthStore