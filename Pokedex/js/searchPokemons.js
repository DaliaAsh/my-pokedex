function searchPokemons() {
  const searchQuery = document.getElementById("search-input").value;
  console.log(searchQuery);
  const pokemons = localStorage.getItem("initialPokemons");
  if (pokemons) {
    const pokemonsArray = JSON.parse(pokemons);
    const filteredPokemonsArray = pokemonsArray.filter((pokemon) => {
      return pokemon.name.toUpperCase().startsWith(searchQuery.toUpperCase());
    });
    console.log(filteredPokemonsArray);
    renderInitialPokemons(JSON.stringify(filteredPokemonsArray));
  }
}
