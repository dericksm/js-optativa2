
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const middlewares = [
  express.static(path.join(__dirname, 'public')),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json()
]
app.use(middlewares)

app.use('/', routes)

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(8080, () => {
  console.log(`App running at http://localhost:8080`)
})
