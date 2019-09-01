module.exports = function(app){
    app.get('/', function(req, res){
        app.app.controllers.index.index(app, req, res)
    })

    app.get('/validate', function(req, res){
        app.app.controllers.chat.validate(app, req, res)
    })

    app.post('/validate', function(req, res){
        app.app.controllers.chat.validate(app, req, res)
    })
}