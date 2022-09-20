const data = require('../data')
const crypto = require('node:crypto')

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function getMaxId(items) {
  return Math.max(...items.map((item) => item.id))
}

function getUser(username, password) {
  const user = data.users.find((user) => user.username === username)
  if (!user || password != username) {
    console.log('login invalido!')
    return
  }
  return user
}

function addUser(name, username, password) {
  if (!password) {
    throw 'Invalid password!'
  }
  const id = getMaxId(data.users) + 1
  const newUser = {
    id,
    name,
    username,
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
      // Gera Token para sessão de login/Autorização
      user.token = crypto.randomUUID()
      res.send(user)
    })
  },
  add: (req, res) => {
    try {
      const { name, username, password } = req.body

      if (name.length <= 3) {
        throw 'Nome inválido'
      }
      const newUser = addUser(name, username, password)
      res.send(newUser)
    } catch (error) {
      res.status(400).end(error)
    }
  },
  loginRequired: (req, res) => {
    const userid = req.headers['x-authorization-userid']
    const usertoken = req.headers['x-authorization-usertoken']
    if (!userid || !usertoken) {
      res.status(401).end('Header de segurança não encontrado')
      return false
    }
    const user = data.users.find((u) => u.id == userid)
    if (!user || user.token != usertoken) {
      res.status(401).end('Header de segurança inválido')
      return false
    }
    return user
  },
}
