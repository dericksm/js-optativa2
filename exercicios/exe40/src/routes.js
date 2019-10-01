const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/oficina'), async (req, res) => {
  let oficina = await axios.get('http://localhost:3000/oficina')
  res.send(oficina)
}

router.get('/local'), async (req, res) => {
  let oficina = await axios.get('http://localhost:3000/oficina')
  res.send(oficina)
}

router.get('/usuarios'), async (req, res) => {
  let oficina = await axios.get('http://localhost:3000/oficina')
  res.send(oficina)
}

router.post('/oficina', async (req, res) => {
  data = req.body
  await axios.post('localhost:3000/oficina', { data }).then(() => {
    res.send("Inserido com sucesso")
  }).catch(res.send("Não foi possível inserir"))
}
)

router.post('/local', async (req, res) => {
  data = req.body
  await axios.post('localhost:3000/oficina', { data }).then(() => {
    res.send("Inserido com sucesso")
  }).catch(res.send("Não foi possível inserir"))
}
)

router.post('/usuarios', async (req, res) => {
  data = req.body
  let oficina = await axios.get('http://localhost:3000/oficina')
  if (!oficina.local <= oficina.participantes.length) {
    res.json({
      "erro": {
        "msg": "A capacidade máxima foi atingida"
        ,
        "codigo": 400
      }

    })
  } else {
    await axios.post('localhost:3000/oficina', { data }).then(() => {
      res.send("Inserido com sucesso")
    }).catch(res.send("Não foi possível inserir"))
  }
}
)

router.delete('/deletar', async (req, res) => {
  axios.delete('http://localhost:3000/usuários/' + req.body.usuario._id)
    .then(resp => {
      console.log(resp.data)
    }).catch(error => {
      console.log(error);
    });
})


module.exports = router
