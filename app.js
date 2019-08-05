let express = require('express')
let consign = require('consign')
let bodyParser = require('body-parser')
let expressValidator = require("express-validator");

const app = express()

app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(express.static('./app/public'))
app.use(bodyParser.urlencoded({extended : true}))
app.use(expressValidator())

consign()
    .include('app/routes')
    .then('app/controllers')
    .into(app)

let server = app.listen(80, function(){
    console.log('Ta rodando')
})
