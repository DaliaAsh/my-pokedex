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
    basePokemonHtml += `<div style="display:flex;margin:1em"><div><b>${basePokemon.base}</b></div>
    <div style="height:1.5em;background-color:green;width:80%;border-radius:0.5em;margin-left:1em">
    <div class="white-text" style="width:${basePokemon.value}%;background-color:red ;height:100%;text-align:center;border-radius:0.5em">${basePokemon.value}%</div>
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
    <div class="" style="width:60%;display:flex;justify-content:center;flex-direction:column">
  ${basePokemonHtml}
  <h5>Types</h5>
    ${pokemon.type.map((type) => {
      return `<span style="margin-left:2em"><strong>${type}</strong></span>`;
    })}
    
    </div>
  </div>
   <div>
    </div>
  `;
}
