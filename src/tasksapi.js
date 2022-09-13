axios.defaults.baseURL = 'http://localhost:3000'

// GET lista de tarefas
function getTasks(cb) {
  axios
    .get('/tasks')
    .then((response) => {
      cb(response.data)
    })
    .catch((error) => {
      console.log('error:', error)
    })
}

// GET de uma task específica
function getTask(taskId, cb) {
  axios
    .get(`/tasks/${taskId}`)
    .then((response) => {
      cb(response.data)
    })
    .catch((error) => {
      console.log('error:', error)
    })
}

// POST para criar uma nova tarefa
function createTask(title, project, date, cb) {
  console.log(`${title}, ${project}, ${date}`)
  const taskData = {
    title: title,
    project: project,
    dueTo: date,
  }
  axios
    .post(`/tasks`, taskData)
    .then((response) => {
      cb(response.data)
    })
    .catch((error) => {
      console.log('erro:', error)
    })
}

// PUT para atutalizar todos dados da tarefa
function updateTask(taskId, title, project, date, cb) {
  const taskData = {
    title: title,
    project: project,
    dueTo: date,
  }
  axios
    .put(`/tasks/${taskId}`, taskData)
    .then((response) => {
      cb(response.data)
    })
    .catch((error) => {
      console.log('erro:', error)
    })
}

// PATCH para atutalizar um dado da tarefa
function updateTaskDate(taskId, date) {
  const taskData = {
    dueTo: date,
  }
  axios
    .patch(`/tasks/${taskId}`, taskData)
    .then((response) => {
      console.log('Tarefa salva', response.data)
    })
    .catch((error) => {
      console.log('erro:', error)
    })
}

// DELETE para apagar uma tarefa
function deleteTask(taskId, cb) {
  axios
    .delete(`/tasks/${taskId}`)
    .then((response) => {
      cb(response.data)
    })
    .catch((error) => {
      console.log('erro:', error)
    })
}
