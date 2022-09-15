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

function addUser(username, name, email, password) {
  if (!password) {
    throw 'Invalid password!'
  }
  const id = data.users.length + 1
  const newUser = {
    id,
    username,
    name,
    email,
  }
  data.users.push(newUser)
  return newUser
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
  add: (req, res) => {
    try {
      const { username, name, email, password } = req.body
      const newUser = addUser(username, name, email, password)
      res.send(newUser)
    } catch (error) {
      res.status(404).end(error)
    }
  },
}
