const data = require('../data')

module.exports = {
  getTasks: (req, res) => {
    res.send(data.tasks)
  },
}
