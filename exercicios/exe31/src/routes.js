const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator/check')
const axios = require('axios')


function getList(req, response) {

  axios.get('http://localhost:3000/list')
  .then( result => {
    setList(result.data,req, response)
  })}


  function setList(list,req, response) {
    console.log(list)
    response.render('index', {list: list})
  }

router.get('/', (req, res) => {
  getList(req, res)
})

router.get('/inserir', (req, res) => {
  res.render('inserir', {
    data: {},
    errors: {},
    messages: {}
  })
})

// routes
router.post('/enviar', [
  check('name')
    .isLength({ min: 1 })
    .withMessage('Nome obrigatório')
    .trim(),
  check('price')
    .isNumeric()
    .withMessage('Preço obrigatório')
    .trim()
], (req, routerRes) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return routerRes.render('inserir', {
      data: req.body,
      errors: errors.mapped()
    })
  }

  axios.post('http://localhost:3000/list', {
    name: req.body.name,
    price: req.body.price
  }).then((res) => {
    console.log(`statusCode: ${res.statusCode}`)
  }).catch((error) => {
    console.error(error)
  })

  routerRes.render('inserir', {
    data: {},
    errors: {},
    messages: 'Produto inserido com sucesso'
  })

})

module.exports = router
