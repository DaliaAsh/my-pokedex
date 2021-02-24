function openModal(id) {
  const elem = document.getElementById("details");
  const instance = M.Modal.init(elem, { dismissible: true });
  configureModal(id);
  instance.open();
}
async function configureModal(id) {
  const pokemon = await fetchPokemon(id);
  console.log(pokemon.species);
  document.getElementById("details").innerHTML = `
    <div class="modal-content modal-custom-container>
    <div class="custom-modal-image">
    <img src="${pokemon.image}" width="300" height="300"/>
    </div>
<div style="width:50%">gh</div>
    </div>
    `;
}
