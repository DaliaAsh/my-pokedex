function transformPokemonsToCards(pokemonsArray) {
  let html = "";
  let pokemonsNames = [];
  pokemonsArray.map((pokemon) => {
    pokemonsNames.push(pokemon.name);
  });
  const oldPokemonsNames = [...pokemonsNames];
  const sortedPokemonsNames = pokemonsNames.sort();
  console.log(oldPokemonsNames);
  console.log(sortedPokemonsNames);
  const pokemonsIndecies = sortedPokemonsNames.map((pokemonName) => {
    return oldPokemonsNames.indexOf(pokemonName);
  });
  console.log(pokemonsIndecies);
  const sortedPokemons = pokemonsIndecies.map((pokemonIndex) => {
    return pokemonsArray[pokemonIndex];
  });
  console.log(sortedPokemons);
  sortedPokemons.map((pokemon, index) => {
    html += `<div class="card pokemon pokemon-title" style="margin:2em;width:18em;padding-bottom:2em;background-color:${
      pokemon.species.color.name
    }">
    <h5>${index + 1}</h5>
    <h4 class="card-title"><strong>${pokemon.name}</strong></h4>
    <div>
    <img alt="${pokemon.name}" src="${
      pokemon.frontImageUrl
    }" width="150" height="150"/>
    </div>
      <a class="waves-effect waves-light btn modal-trigger pink" href="#details" onclick="openModal(${
        pokemon.id
      })">View Details</a>
    </div>`;
  });
  document.getElementById("container").innerHTML = html;
}
