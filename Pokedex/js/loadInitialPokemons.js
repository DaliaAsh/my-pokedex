async function loadInitialPokemons() {
  const pokemons = localStorage.getItem("initialPokemons");
  if (pokemons !== null) {
    renderInitialPokemons(pokemons);
    return;
  }
  let pokemonsArray = [];

  const getAllPokemonsRequest = await fetch(
    "https://boiled-sedate-patch.glitch.me/pokemons"
  );
  const resolvedPokemons = await getAllPokemonsRequest.json();
  localStorage.setItem(
    "initialPokemons",
    JSON.stringify(resolvedPokemons.pokemons)
  );
  renderInitialPokemons(localStorage.getItem("initialPokemons"));
}
function renderInitialPokemons(pokemonsString) {
  let pokemonsArray = JSON.parse(pokemonsString);
  console.log(pokemonsArray);
  pokemonsArray = sortPokemons(pokemonsArray);
  const seenPokemons = localStorage.getItem("seen");
  const caughtPokemons = localStorage.getItem("caught");
  let seenPokemonsArray = [];
  let caughtPokemonsArray = [];
  if (seenPokemons) {
    seenPokemonsArray = JSON.parse(localStorage.getItem("seen"));
  }
  if (caughtPokemons) {
    caughtPokemonsArray = JSON.parse(localStorage.getItem("caught"));
  }
  let pokemonsHtml = "";
  pokemonsArray.map((pokemon) => {
    const isSeen = seenPokemonsArray.includes(pokemon.id);
    const isCaught = caughtPokemonsArray.includes(pokemon.id);
    pokemonsHtml += `<div class="card initial-pokemon" style="margin:2em;background-color:rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})">
    <div class="card-image"> <img alt="${pokemon.name.english}" src="${
      pokemon.image
    }"/></div>
    <h6 class="center" style="text-transform:capitalize"><b>${
      pokemon.name.english
    }</b></h6>
  <div class="card-action white" style="display:flex;justify-content:space-between" >
  <i class="material-icons eye-icon ${
    isSeen ? "green-text" : "black-text"
  }" onclick="markPokemonAsSeen(${pokemon.id})" id="seen${
      pokemon.id
    }">remove_red_eye</i>
    <i class="material-icons  done-icon ${
      isCaught ? "red-text" : "black-text"
    }" onclick="markPokemonAsCaught(${pokemon.id})" id="caught${
      pokemon.id
    }">done_all</i>
  </div>
   <a class="waves-effect waves-light btn modal-trigger black view-details" href="#details" onclick="openModal(${
     pokemon.id
   })">View Details</a>
       </div>`;
  });
  document.getElementById("pokemons").innerHTML = pokemonsHtml;
}
function getRandomNumber() {
  return Math.floor(Math.random() * Math.floor(255));
}
