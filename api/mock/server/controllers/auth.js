const data = require('../data')

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function getUser(username, password) {
  const user = data.users.find((user) => user.username === username)
  if (!user || password != username) {
    console.log('login invalido!')
    return
  }
  return user
}

module.exports = {
  find: (req, res) => {
    const { username, password } = req.body
    sleep(800).then(() => {
      let user = getUser(username, password)
      if (!user) {
        res.status(404).end()
      }
      res.send(user)
    })
  },
}
