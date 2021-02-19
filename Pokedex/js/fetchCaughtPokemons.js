function fetchCaughtPokemons() {
  const caughtPokemons = localStorage.getItem("caught-pokemons");
  if (caughtPokemons === null) {
    document.getElementById(
      "caught-pokemons"
    ).innerHTML = `<h4 class="red-text" style="margin-left:15%">Their is no Caught Pokemons yet:(</h4>`;
    return;
  }
  const caughtPokemonsArray = JSON.parse(caughtPokemons);
  let caughtPokemonsHtml = "";
  caughtPokemonsArray.map((caughtPokemon) => {
    caughtPokemonsHtml += `  <div class="card" style="margin:auto;width:15em">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src='${caughtPokemon.frontImageUrl}'>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${caughtPokemon.name}<i class="material-icons right">more_vert</i></span>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${caughtPokemon.name}<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>`;
  });
  document.getElementById("caught-pokemons").innerHTML = caughtPokemonsHtml;
}
fetchCaughtPokemons();
