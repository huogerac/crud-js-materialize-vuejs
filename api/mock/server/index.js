const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const auth = require('./controllers/auth')
const tasks = require('./controllers/tasks')

const YELLOW = '\x1b[33m%s\x1b[0m'
const WHITE = '\x1b[37m'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.text())
app.use(bodyParser.json())

//CONFIG
const PORT = process.env.API_PORT || 3001
const ORIGIN_URL = process.env.ORIGIN_URL || '*'

app.use(cors({ credentials: true, origin: ORIGIN_URL }))

// AUTH
app.post('/api/auth/login', auth.find)
app.post('/api/auth/signup', auth.add)
// TASKS
app.get('/api/tasks/summary', tasks.summary)
app.get('/api/tasks', tasks.find)
app.get('/api/tasks/:id', tasks.find)
app.post('/api/tasks', tasks.add)
app.post('/api/tasks/:id', tasks.update)
app.delete('/api/tasks/:id', tasks.remove)

app.listen(PORT, () => {
  console.log(YELLOW, '🆙 JSON Server is running on port: ' + PORT, WHITE)
})
