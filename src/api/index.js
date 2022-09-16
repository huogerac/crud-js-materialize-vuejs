import axios from 'axios'
import settings from '@/settings'
import router from '@/router'

const api = axios.create({
  baseURL: settings.apiBaseUrl,
})

export function beforeRequest(config) {
  const loggedUser = window.localStorage.getItem('loggedUser')
  const loggedUserToken = window.localStorage.getItem('loggedUserToken')

  if (loggedUser) {
    config.headers['X-Authorization-UserId'] = `${loggedUser}`
    config.headers['X-Authorization-UserToken'] = `${loggedUserToken}`
  }
  return config
}

export function requestError(error) {
  return Promise.reject(error)
}

api.interceptors.request.use(beforeRequest, requestError)

export function getSuccessResponse(response) {
  return response
}

export function getResponseError(error) {
  if (error.response && error.response.status == 401) {
    router.push({ name: 'login' })
  }
  return Promise.reject(error)
}

api.interceptors.response.use(getSuccessResponse, getResponseError)

export default api
