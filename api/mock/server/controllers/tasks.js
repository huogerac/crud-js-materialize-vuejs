const data = require('../data')
const auth = require('./auth')

function getMaxId(items) {
  return Math.max(...items.map((item) => item.id))
}

module.exports = {
  find: (req, res) => {
    const loggedUser = auth.loginRequired(req, res)
    if (!loggedUser) {
      return
    }
    const { id } = req.params
    if (id != undefined) {
      const task = data.tasks.find((t) => t.id == id)
      if (!task || task.userId != loggedUser.id) {
        res.status(404).end()
        return
      }
      res.send(task)
      return
    }
    res.send(data.tasks.filter((t) => t.userId == loggedUser.id))
  },
  add: (req, res) => {
    const loggedUser = auth.loginRequired(req, res)
    if (!loggedUser) {
      return
    }
    const { title, project, status } = req.body
    const id = getMaxId(data.tasks) + 1
    const newTask = {
      id,
      title,
      project,
      status,
      userId: loggedUser.id,
    }
    data.tasks.push(newTask)
    res.send(newTask)
  },
  update: (req, res) => {
    const loggedUser = auth.loginRequired(req, res)
    if (!loggedUser) {
      return
    }
    const { id } = req.params
    const task = data.tasks.find((t) => t.id == id)
    if (!id || !task || task.userId != loggedUser.id) {
      res.status(404).end()
      return
    }
    const { title, project, status } = req.body
    task.title = title
    task.project = project
    task.status = status
    res.send(task)
  },
  remove: (req, res) => {
    const loggedUser = auth.loginRequired(req, res)
    if (!loggedUser) {
      return
    }
    const { id } = req.params
    const task = data.tasks.find((t) => t.id === id)
    const index = data.tasks.indexOf(task)
    data.tasks.splice(index, 1)
    res.send(task)
  },
  summary: (req, res) => {
    const loggedUser = auth.loginRequired(req, res)
    if (!loggedUser) {
      return
    }
    let taskSummary = {}
    const userTasks = data.tasks.filter((t) => t.userId == loggedUser.id)
    for (let task of userTasks) {
      const key = task.project
      if (!taskSummary.hasOwnProperty(key)) {
        taskSummary[key] = {
          pending: 0,
          working: 0,
          done: 0,
        }
      }
      taskSummary[key][task.status] += 1
    }
    res.send(taskSummary)
  },
}
