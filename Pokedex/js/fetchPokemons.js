async function fetchPokemon(id) {
  const result = await fetch(
    `https://boiled-sedate-patch.glitch.me/pokemons/${id}`
  );
  const pokemon = await result.json();
  console.log(pokemon.pokemon[0]);
  const pokemonData = pokemon.pokemon[0];
  return {
    name: pokemonData.name,
    id: pokemonData.id,
    image: pokemonData.image,
  };
}
async function fetchPokemons() {
  let arr = [];
  let count = 0;
  let uniqueRandomNumbers = [];
  while (1) {
    let number = Math.floor(Math.random() * 100) + 1;
    if (uniqueRandomNumbers.indexOf(number) === -1) {
      uniqueRandomNumbers.push(number);
      count++;
    }
    if (count === 5) {
      break;
    }
  }
  for (let i = 0; i < 5; i++) {
    arr.push(await fetchPokemon(uniqueRandomNumbers[i]));
  }
  console.log(arr);
  transformPokemonsToCards(arr);
}
fetchPokemons();
