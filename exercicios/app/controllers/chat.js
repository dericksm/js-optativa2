module.exports.validate = function (app, req, res) {

    req.assert('nome', 'Nome deve conter entre 3 e 15 caracteres').len(3, 15)
    req.assert('nome', 'Nome inválido').not().isIn(["Violeta", "Azul", "Verde"])
    req.assert('classe', 'Local perigoso para magos').custom(() => {
        if (req.body.classe == 'Mago' && req.body.cidade == 'Venore') {
            return false
        } else {
            return true
        }
    })


    let errors = req.validationErrors()

    if (errors) {
        res.render('index.ejs', { validacao: errors })
    } 
}