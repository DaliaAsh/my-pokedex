function transformPokemonsToCards(pokemonsArray) {
  console.log(pokemonsArray);
  let html = "";
  pokemonsArray.map((pokemon) => {
    html += `<div class="card" style="margin:2em;width:18em">
    <div class="card-title">${pokemon.name}</div>
    <div class="">
    <img alt="${pokemon.name}" src="${pokemon.frontImageUrl}"/>
    </div>
    </div>`;
  });
  document.getElementById("container").innerHTML = html;
}
