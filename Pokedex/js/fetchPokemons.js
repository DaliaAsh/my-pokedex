function fetchPokemons() {
  console.log("Pokemons fetched here");
  var fetchPokemonsRequest = new XMLHttpRequest();
  fetchPokemonsRequest.onload = function () {
    if (
      fetchPokemonsRequest.status >= 200 &&
      fetchPokemonsRequest.status < 300
    ) {
      var response = JSON.parse(fetchPokemonsRequest.response);
      response.results.map((pokemon) => {
        fetchPokemon(pokemon);
      });
      return;
    }
    console.log("request failed");
  };
  fetchPokemonsRequest.open("GET", "https://pokeapi.co/api/v2/pokemon");
  fetchPokemonsRequest.send();
}
function fetchPokemon(pokemon) {
  var fetchPokemonDataRequest = new XMLHttpRequest();
  var pokemonData = null;
  var pokemonImageUrl = "";
  return new Promise((resolve, reject) => {
    fetchPokemonDataRequest.onload = function () {
      if (
        fetchPokemonDataRequest.status >= 200 &&
        fetchPokemonDataRequest.status < 300
      ) {
        var response = JSON.parse(fetchPokemonDataRequest.response);
        console.log("pokemon Image", response.sprites.back_default);
        pokemonImageUrl = response.sprites.back_default;
        resolve("pokemon is fetched");
      } else {
        reject("error happens");
      }
    };
    fetchPokemonDataRequest.open("GET", pokemon.url);
    fetchPokemonDataRequest.send();
  })
    .then(() => {
      pokemonData = JSON.stringify({
        name: pokemon.name,
        imageUrl: pokemonImageUrl,
      });
      renderPokemonCard(pokemonData);
    })
    .catch((err) => {
      console.log(err);
    });
}
