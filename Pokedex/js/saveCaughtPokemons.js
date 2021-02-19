async function savePokemon(id) {
  console.log(id);
  const pokemon = await fetchPokemon(id);
  console.log(pokemon);
  const oldCaughtPokemons = localStorage.getItem("caught-pokemons");
  if (oldCaughtPokemons === null) {
    const firstCaughtPokemons = [pokemon];
    localStorage.setItem(
      "caught-pokemons",
      JSON.stringify(firstCaughtPokemons)
    );
    return;
  }
  console.log(oldCaughtPokemons);
  let pokemonsArray = JSON.parse(oldCaughtPokemons);
  let isPokemonExist = false;
  pokemonsArray.map((pokemonItem) => {
    if (pokemonItem.id === pokemon.id) {
      isPokemonExist = true;
    }
  });
  if (isPokemonExist) {
    return;
  }
  pokemonsArray.push(pokemon);
  localStorage.setItem("caught-pokemons", JSON.stringify(pokemonsArray));
}
