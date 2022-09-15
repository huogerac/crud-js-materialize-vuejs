import api from '@/api'

export default {
  getTasks: () => {
    return new Promise((resolve, reject) => {
      api
        .get('/api/tasks')
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
}
