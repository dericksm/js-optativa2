// Crie pacote usando npm e implemente um script que receba
// argumentos, como node index.js 1 2 3 4 5 6 . O script deve retornar a
// soma total apenas dos argumentos divisíveis por 2.
console.log(process.argv.map(x => {
    if(typeof parseInt(x) == 'number') return parseInt(x)
}).reduce((prev, current) => {
    if (parseInt(current) % 2 == 0) {
        prev += current
    }
    
    console.log(prev)
    return prev
}, 0))
