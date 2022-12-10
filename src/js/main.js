import '../css/style.css'

/* Selecionar os Elemento no DOM */
const inputPesquisa = 
document.querySelector("#inputPesquisa")
const btnLocalizar = 
document.querySelector("#btnLocalizar")
const pokedexDisplay = 
document.querySelector("#display")

/* Adicionando Eventos */
btnLocalizar.addEventListener('click',async function(){
    /* buscar os dados do pokemon na api*/
    const dadosDoPokemon = await localizarPokemon(inputPesquisa.value)
    /* criar o cartão do Pokemon */
    criarCartao(dadosDoPokemon)

})


async function localizarPokemon(termoBusca){
  const url = 
  `https://pokeapi.co/api/v2/pokemon/${termoBusca}`
  const response = await fetch(url)
  const pokemon =  await response.json()
 //console.log(pokemon)
  return pokemon
}

function criarCartao(pokemon){
    const cartaoPokemon = document.createElement('div')
    cartaoPokemon.className='cartaoPokemon'
    cartaoPokemon.innerHTML =`
    <img class="pokemonSprite" 
    src="${pokemon.sprites.front_default}"/> 
    <h2>${pokemon.name}</h2>
    `
    pokedexDisplay.appendChild(cartaoPokemon)
}