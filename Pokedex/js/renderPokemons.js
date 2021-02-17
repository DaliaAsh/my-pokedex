function renderPokemonCard(pokemonData) {
  var pokemonDataParsed = JSON.parse(pokemonData);
  console.log(pokemonDataParsed.name);
  console.log(pokemonDataParsed.imageUrl);
}
