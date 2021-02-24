async function deletePokemonById(id) {
  await fetch(`https://boiled-sedate-patch.glitch.me/pokemons/${id}`, {
    method: "DELETE",
  });
  let oldPokemons = JSON.parse(localStorage.getItem("initialPokemons"));
  oldPokemons = oldPokemons.filter((pokemon) => {
    return pokemon.id !== id;
  });
  renderInitialPokemons(JSON.stringify(oldPokemons));
  localStorage.setItem("initialPokemons", JSON.stringify(oldPokemons));
  let seenPokemonsIdArray = JSON.parse(localStorage.getItem("seen"));
  localStorage.setItem(
    "seen",
    JSON.stringify(
      seenPokemonsIdArray.filter((id) => {
        return id !== id;
      })
    )
  );
  updatePokemonsStatus();
  let caughtPokemonsIdArray = JSON.parse(localStorage.getItem("caught"));
  localStorage.setItem(
    "caught",
    JSON.stringify(
      caughtPokemonsIdArray.filter((id) => {
        return id !== id;
      })
    )
  );
  updatePokemonsStatus();
}
