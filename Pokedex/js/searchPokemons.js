function searchPokemons() {
  const searchQuery = document.getElementById("search-input").value;
  console.log(searchQuery);
  const pokemons = localStorage.getItem("initialPokemons");
  if (pokemons) {
    const pokemonsArray = JSON.parse(pokemons);
    const filteredPokemonsArray = pokemonsArray.filter((pokemon) => {
      return pokemon.name.english
        .toUpperCase()
        .startsWith(searchQuery.toUpperCase());
    });
    console.log(filteredPokemonsArray);
    renderInitialPokemons(JSON.stringify(filteredPokemonsArray));
  }
}
document.addEventListener("DOMContentLoaded", function () {
  let pokemonsNames = JSON.parse(localStorage.getItem("pokemonsNames"));
  let data = {};
  pokemonsNames.map((name) => {
    data[name] = null;
  });
  let elems = document.querySelectorAll(".autocomplete");
  let instances = M.Autocomplete.init(elems, {
    data: data,
  });
});
