async function fetchPokemon(id) {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await result.json();
  const pokemonSpeciesRequest = await fetch(pokemon.species.url);
  const pokemonSpecies = await pokemonSpeciesRequest.json();
  return {
    name: pokemon.name,
    backImageUrl: pokemon.sprites.back_default,
    frontImageUrl: pokemon.sprites.front_default,
    id: id,
    species: pokemonSpecies,
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
