// @ts-check
const axios = require('axios')

const word = process.argv[2]

async function getWords() {
  try {
    const response = await axios.get(`http://dicionario-aberto.net/search-json/${word}`);
    const { etym, sense } = response.data.entry
    console.log({ 
      word,
      definition: sense.map(el => el.def).join('\n'),
      origin: etym['@orig'],
    })
  } catch (error) {
    console.error('Palavra não encontrada.');
  }
}

getWords()
