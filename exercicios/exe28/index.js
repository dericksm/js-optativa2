// @ts-check
// Implemente um pacote capaz de ler um arquivo de texto cujo o caminho
// é passado por parâmetro pelo usuário. O arquivo lido deverá conter
// palavras que serão persistidas no banco LevelDB.
const fs = require('fs')
const filePath = process.argv[2]
const level = require('level')
const db = level('UNESC')

const file = fs.readFileSync(filePath, 'utf8')

db.put("words", file, function (err) {
    if (!err) {
        console.log("Valor salvo com sucesso")
    }
    db.close()
})

