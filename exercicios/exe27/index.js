// Implemente um pacote capaz de solicitar ao usuário uma sequência de
// palavras. Ao final, o programa deve salvar todas as palavras em um
// arquivo de texto (de preferência no formato JSON ). No entanto, o
// arquivo não poderá conter palavras repetidas ou nulas
const fs = require('fs')
const words = process.argv.slice(2)

const testedWords = {}
function hasDuplicate(word) {
    if (testedWords[word] != undefined) return true
    testedWords[word] = 1
    return false
}

fs.writeFileSync(
    './words.txt',
    JSON.stringify(words.filter(word => (word != null && word.length && !hasDuplicate(word)))),
    { encoding: 'utf8' }
)