
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express()

app.set('views', path.join(__dirname, 'public'))
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




app.listen(9002, function () {
    console.log('server listening here.');
});