const express = require('express')
const router = express.Router()
const axios = require('axios')


router.get('/gerador', async (req, res) => {
  let nome = await axios.get('http://localhost:3000/nome')
  nome = nome.data
  nome = nome[Math.floor(Math.random() * Object.keys(nome).length)]

  let sobrenome = await axios.get('http://localhost:3000/sobrenome')
  sobrenome = sobrenome.data
  sobrenome = sobrenome[Math.floor(Math.random() * Object.keys(sobrenome).length)]

  let posicao = await axios.get('http://localhost:3000/posicao')
  posicao = posicao.data
  posicao = posicao[Math.floor(Math.random() * Object.keys(posicao).length)]

  let clube = await axios.get('http://localhost:3000/clube')
  clube = clube.data
  clube = clube[Math.floor(Math.random() * Object.keys(clube).length)]

  let idade = Math.floor(Math.random() * (40 - 17 + 1) + 17);

    res.json({message: `${nome} ${sobrenome} é um futebolista brasileiro de ${idade} anos que atua como ${posicao}. Atualmente defende o ${clube}.`})
})


module.exports = router
