function transformPokemonsToCards(pokemonsArray) {
  let html = "";
  const sortedPokemons = sortPokemons(pokemonsArray);
  sortedPokemons.map((pokemon, index) => {
    console.log(pokemon.name);
    html += `<div class="card pokemon pokemon-title" style="margin:2em;width:18em;padding-bottom:2em;background-color:rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})">
    <h5>${index + 1}</h5>
    <h4 class="card-title" style="color:${
      "white" === "white" ? "black" : "white"
    }"><strong>${pokemon.name.english}</strong></h4>
    <div>
    <img alt="${pokemon.name.english}" src="${
      pokemon.image
    }" width="150" height="150"/>
    </div>
      <a class="waves-effect waves-light btn modal-trigger pink" href="#details" onclick="openModal(${
        pokemon.id
      })">View Details</a>
    </div>`;
  });
  document.getElementById("container").innerHTML = html;
}
function sortPokemons(pokemonsArray) {
  pokemonsArray.sort((a, b) =>
    a.name.english > b.name.english
      ? 1
      : b.name.english > a.name.english
      ? -1
      : 0
  );
  return pokemonsArray;
}
function getRandomNumber() {
  return Math.floor(Math.random() * Math.floor(255));
}
