var express = require('express');
var basicAuth = require('basic-auth');
// const basicAuth = require('express-basic-auth')
var app = express();
const path = require('path')
app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'ejs')


var auth = function (req, res, next) {
    function unauthorized(res) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        res.render('404')
        return res.send(401);
    };

    var user = basicAuth(req);

    if (!user || !user.name || !user.pass) {
        return unauthorized(res);
    };

    if (user.name === 'root' && user.pass === 'unesc2019') {
        res.render('sucesso')
    } else {
        return unauthorized(res);
    };
};

app.get('/', auth, function (req, res) {
    res.send(200, 'Authenticated');
});

app.get('/logout', function (req, res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    res.redirect('/')
});

app.listen(9002, function () {
    console.log('server listening here.');
});