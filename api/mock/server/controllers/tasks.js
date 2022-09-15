const data = require('../data')

module.exports = {
  getTasks: (req, res) => {
    res.send(data.tasks)
  },
  remove: (req, res) => {
    const { id } = req.params
    const task = data.tasks.find((t) => t.id === id)
    const index = data.tasks.indexOf(task)
    data.tasks.splice(index, 1)
    res.send(task)
  },
}
