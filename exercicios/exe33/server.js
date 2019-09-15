const express = require('express')
const routes = require('./routes')
const router = express.Router()
var app = express()
app.use('/', routes)
app.listen(8080, () => {
    console.log(`App running at http://localhost:8080`)
})