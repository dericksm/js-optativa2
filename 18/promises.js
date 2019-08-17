$(document).ready(function () {





    $("#btnGerar").click(function () {
        const times = ["Dodoi", "Cretino", "Vatapá", "Salafrário"]
        const time = () => { return times[Math.floor(Math.random() * times.length)] }
        console.log(time())

        let prom = new Promise(function (resolve, reject) {
            let one = Math.floor(Math.random() * 10)
            let two = Math.floor(Math.random() * 10)
            console.log(one, two)
            setTimeout(function () {
                if (one > two) {
                    resolve([one, two])
                } else
                    reject([two, one])
            })
        })

        prom.then(function ([winner, loser]) {
            $("#resultados").append(
                `<div id="result" class="input-group phoneNumber">
                <input type="text" class="form-control" value="Resultado: ${time()} x ${time()}" readonly>
                <div class="input-group-append">
                  <button class="btn btn-outline-success" id="btnOn" type="button">${winner}</button>
                  <button class="btn btn-outline-danger" id="btnOff" type="button">${loser}</button>
                </div>
              </div>`
            )
        }).catch(function (one, two) {
            //todo
        })

    })

})