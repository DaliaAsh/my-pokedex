async function openModal(id) {
  const pokemon = await fetchPokemon(id);
  console.log(pokemon);
  document.getElementById("modal").className = "white opened";
  document.getElementById("modal").innerHTML = `<div>
  <h4>${pokemon.name}</h4>
  <div>
  <a class="waves-effect waves-light btn black" onclick="closeModal()">Close</a>
   <a class="waves-effect waves-light btn #33b2e5" onclick="savePokemon(${pokemon.id})">Save</a>
   </div>
  </div>`;
}
function closeModal() {
  document.getElementById("modal").className = "white closed";
}
