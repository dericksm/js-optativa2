
const level = require('level')
const db = level('UNESC')

db.get('words', (err, result) => {
    if(err) return console.error(err)
    console.log(result)
})
