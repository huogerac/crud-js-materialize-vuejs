import api from '@/api'

export default {
  login: (username, password) => {
    return new Promise((resolve, reject) => {
      api
        .post('/api/auth/login', { username, password })
        .then((response) => {
          console.log('API AUTH: SUCCESS')
          return resolve(response.data)
        })
        .catch((error) => {
          console.log('API AUTH: ERROR')
          return reject(error)
        })
    })
  },
  signup: (name, username, password) => {
    return new Promise((resolve, reject) => {
      let data = {
        name,
        username,
        password,
      }
      api
        .post('/api/auth/signup', data)
        .then((response) => {
          console.log('---signup', response)
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}
