async function fetchPokemon(id) {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await result.json();
  return {
    name: pokemon.name,
    backImageUrl: pokemon.sprites.back_default,
    frontImageUrl: pokemon.sprites.front_default,
  };
}
async function fetchPokemons() {
  let arr = [];
  for (let i = 1; i <= 5; i++) {
    arr.push(await fetchPokemon(i));
  }
  transformPokemonsToCards(arr);
}
fetchPokemons();
