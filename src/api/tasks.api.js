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
  removeTask: (taskId) => {
    return new Promise((resolve, reject) => {
      api
        .delete(`/api/tasks/${taskId}`)
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
}
