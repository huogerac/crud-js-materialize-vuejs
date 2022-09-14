const data = require('../data')

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function getUser(username, password) {
  const user = data.users.find((user) => user.username === username)
  if (!user || password != 'apimock') {
    console.log('login invalid!')
    return
  }
  console.log('login ok', user)
  return user
}

module.exports = {
  find: (req, res) => {
    const { username, password } = req.body
    sleep(800).then(() => {
      let user = getUser(username, password)
      console.log('----user', user)
      if (!user) {
        res.status(404).end()
      }
      res.send(user)
    })
  },
}
