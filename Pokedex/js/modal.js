function openModal(id) {
  const elem = document.getElementById("details");
  const instance = M.Modal.init(elem, { dismissible: true });
  configureModal(id);
  instance.open();
}
async function configureModal(id) {
  const pokemon = await fetchPokemon(id);
  console.log(pokemon);
  const basePokemonArray = [];
  for (let base in pokemon.base) {
    basePokemonArray.push({ base: base, value: pokemon.base[base] });
  }
  let basePokemonHtml = "";
  basePokemonArray.map((basePokemon) => {
    basePokemonHtml += `<div class="base-pokemon"><div><b>${basePokemon.base}</b></div>
    <div class="custom-progress-container">
    <div class="white-text custom-base-pokemon-value" style="width:${basePokemon.value}%">${basePokemon.value}%</div>
    </div>
    </div>`;
  });
  document.getElementById(
    "details"
  ).innerHTML = `<div style="display:flex;align-items:center"> 
  <div class="" style="width:40%;display:flex;justify-content:center">
  <div class="custom-modal-image">
    <img src="${pokemon.image}" width="100%" height="100%" />
    </div>
  </div>
    <div class="base-pokemon-detail">
  ${basePokemonHtml}
  <h5 class="red-text">Types</h5>
    ${pokemon.type.map((type) => {
      return `<span class="pokemon-type"><strong>${type}</strong></span>`;
    })}
    </div>
  </div>
   <div>
    </div>
  `;
}
