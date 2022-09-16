const data = require('../data')

module.exports = {
  find: (req, res) => {
    const { id } = req.params
    if (id != undefined) {
      const task = data.tasks.find((t) => t.id == id)
      if (!task) {
        res.status(404).end()
        return
      }
      res.send(task)
      return
    }
    res.send(data.tasks)
  },
  add: (req, res) => {
    const { title, project, status } = req.body
    const id = data.tasks.length + 1
    const newTask = {
      id,
      title,
      project,
      status,
    }
    data.tasks.push(newTask)
    res.send(newTask)
  },
  update: (req, res) => {
    const { id } = req.params
    const task = data.tasks.find((t) => t.id == id)
    if (!id || !task) {
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
    const { id } = req.params
    const task = data.tasks.find((t) => t.id === id)
    const index = data.tasks.indexOf(task)
    data.tasks.splice(index, 1)
    res.send(task)
  },
  summary: (req, res) => {
    let taskSummary = {}
    for (let task of data.tasks) {
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
