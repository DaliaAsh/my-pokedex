function openModal(id) {
  const elem = document.getElementById("details");
  const instance = M.Modal.init(elem, { dismissible: true });
  configureModal(id);
  instance.open();
  savePokemon(id);
}
async function configureModal(id) {
  const pokemon = await fetchPokemon(id);
  console.log(pokemon.species);
  document.getElementById("details").innerHTML = `
    <div class="modal-content ${
      pokemon.species.color.name === "white" ? "black" : "white"
    }">
    <div style="display:flex;width:50%">
    <div class="centered">
    <img src="${pokemon.frontImageUrl}" width="300" height="300"/>
       <h6 style="width:85%;color:${pokemon.species.color.name}">${
    pokemon.species.flavor_text_entries[0].flavor_text
  }</h6>
    </div>
    <div style="border-left:1px solid black;padding-left:5em;width:100%">
      <h4 style="color:${
        pokemon.species.color.name
      }">${pokemon.name.toUpperCase()}</h4>
    <h6 style="text-transform:capitalize">
    <i class="material-icons ${pokemon.species.color.name}-text">show_chart</i>
    <strong>
    ${pokemon.species.growth_rate.name} Growth Rate
    </strong>
    </h6>
     <h6 style="text-transform:capitalize">
     <i class="material-icons ${pokemon.species.color.name}-text">extension</i>
     <strong>${pokemon.species.shape.name} Shape</strong></h6>
      <h6>
      <i class="material-icons ${pokemon.species.color.name}-text">pets</i>
      <strong>
      ${
        pokemon.species.has_gender_differences
          ? "Has Gender Differences"
          : "Doesn't have Gender Differences"
      }
      </strong>
      </h6>
     <h6>
     <i class="material-icons ${
       pokemon.species.color.name
     }-text">invert_colors</i>
     <strong>Egg Groups <br>${pokemon.species.egg_groups.map((egg_group) => {
       return `<span><strong>${egg_group.name}</strong></span>`;
     })}
     </strong>
     </h6>
     <h6>    <i class="material-icons ${
       pokemon.species.color.name
     }-text">filter_vintage</i><strong>Varieties <br>${pokemon.species.varieties.map(
    (variety) => {
      return `<span>${variety.pokemon.name}</span>`;
    }
  )}
     </strong>
     </h6>
     <div>
    </div>
    `;
}
