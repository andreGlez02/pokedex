let pokemon = {}

function handleSearch(){
  const searchPokemon = document.getElementById("searchInput").value;
  fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
  .then((res) => res.json())
  .then(res  => {
    pokemon.name = res.name
    pokemon.types = res.types.length    
    pokemon.moves = res.moves.map(moviento => moviento.move.name);
    pokemon.game_indices = res.game_indices.map(indice => indice.version.name);
    pokemon.art = res.sprites.front_default
    console.log(pokemon)
})
.catch(function()  {
  alert("The name of the pokemon is wrong");
})};

