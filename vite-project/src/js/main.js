import '../css/style.css'
/*selecionando os elementos do DOM*/
const inputPesquisa = document.querySelector('#inputPesquisa');
const btnLocalizar = document.querySelector('#btnLocalizar');
const pokedexDisplay = document.querySelector('#display');

/*Adicionando Eventos*/

btnLocalizar.addEventListener('click', async () => {
    /*buscar os dados do pokemon na api*/
    const datePokemon = await localizarPokemon(inputPesquisa.value);
    /*Criar cartão do pokemon*/
    createCard(datePokemon);



});

async function localizarPokemon(termoBusca) {
    const url = `https://pokeapi.co/api/v2/pokemon/${termoBusca}`; /*Interpolando na tamplateString*/
    const response = await fetch(url);
    const pokemon = await response.json();
    return pokemon;
}

function createCard(pokemon) {
    const cardPokemon = document.createElement('div')
    cardPokemon.className = 'cardPokemon'
    cardPokemon.innerHTML = `
    <img class="pokemonSprite"  src="${pokemon.sprites.other.dream_world.front_default}">
    <h2>${pokemon.name}</h2> 
       `
    pokedexDisplay.innerHTML = '';
    pokedexDisplay.appendChild(cardPokemon);
}