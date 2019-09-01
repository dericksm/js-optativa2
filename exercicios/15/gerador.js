//@ts-check
class Gerador {
  listaDeCompras = []

  gerarHtml = () => {
    return document.createElement("div")
  }

  addLista = (listaDeCompras) => {
    this.listaDeCompras = listaDeCompras
  }
}

class GeradorLista extends Gerador {
  gerarHtml = () => {
    const lista = document.createElement("ol")
    
    let resultado = ''
    this.listaDeCompras.forEach(compra => {
      resultado = resultado.concat(`  <li>${compra}</li>
      `)
    })
    lista.innerHTML = resultado

    return lista
  }
}

const gerador = new GeradorLista()
const listaCompras = ["shampoo", "frutas", "arroz"]

gerador.addLista(listaCompras)
const lista = gerador.gerarHtml()
document.getElementById("body").append(lista)
