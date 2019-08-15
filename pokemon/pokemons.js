$(document).ready(function () {

  const randPokes = () => [...new Array(10)]
    .map(() => Math.round(Math.random() * 100));

  randPokes().forEach(async (item) => {
    const poke = await P.getPokemonByName(item)
    createCard(poke)
  })


  const searchPokemon = async (name) => {
    const poke = await P.getPokemonByName(name)
    return poke
  }


  $(document).keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
      $("#pokeCards").show();
      setTimeout(function () {
        $("#pokeCards").hide();
      }, 3000);
    }
  });

  $("#search").click(async function (e) {
    const poke = await P.getPokemonByName($("#pokeName").val())
    createCard(poke)
    console.log(poke)
  })


  // Função responsavel por montar o HTML exibido na pagina
  function createCard(pokemon) {
    card = `
    <div class="col-4" style=" margin-bottom: 10%">
    <div class="card">
        <img src="${pokemon.sprites.front_default}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${pokemon.name}</h1>
              </h5>
                <p class="card-text">
                    <font class="number">Nº ${pokemon.id} - Type: ${pokemon.types.map(item => item.type.name).toString()}</font>
                    <h3 class="skill">Skills: ${pokemon.abilities.map(item => ' ' + item.ability.name).toString()}</h3>
                    <h3 class="weight">Weight: ${pokemon.weight / 10}kg</h3>
                    <h3 class="height">Height: ${pokemon.height / 10}m</h3>
            </div>
            </div>
            </div>`;

    $("#pokeCards").append(card)
  }


})