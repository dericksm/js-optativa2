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
  switch (true) {
    case (idade < 22): idade = 'Novato'; break;
    case (idade < 28): idade = 'Profissional'; break;
    case (idade < 34): idade = 'Veterano'; break;
    case (idade < 40): idade = 'Master'; break;
  }

  res.json({ message: `${nome} ${sobrenome} é um futebolista brasileiro ${idade} anos que atua como ${posicao}. Atualmente defende o ${clube}.` })


})


router.post('/jogador', async (req, res) => {
  data = req.body
  await axios.post('localhost:3000/jogador', {data}).then(() => {
    res.send("inserido com sucesso")
  }).catch(res.send("deu merda"))
}
)

module.exports = router
