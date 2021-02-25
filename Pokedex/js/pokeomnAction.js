function markPokemonAsSeen(id) {
  console.log(`seen pokemon ${id}`);
  const seenPokemons = localStorage.getItem("seen");
  console.log(seenPokemons);
  let updatedSeenPokemons = [];
  if (seenPokemons) {
    const oldPokemons = JSON.parse(seenPokemons);
    if (oldPokemons.includes(id)) {
      return;
    }
    oldPokemons.push(id);
    localStorage.setItem("seen", JSON.stringify(oldPokemons));
    updatePokemonsStatus();
    updatePokemonToSeen(id);
    return;
  } else {
    updatedSeenPokemons.push(id);
  }
  localStorage.setItem("seen", JSON.stringify(updatedSeenPokemons));
  updatePokemonsStatus();
  updatePokemonToSeen(id);
}
function markPokemonAsCaught(id) {
  console.log(`caught pokemon ${id}`);
  const caughtPokemons = localStorage.getItem("caught");
  console.log(caughtPokemons);
  let updateCaughtPokemons = [];
  if (caughtPokemons) {
    const oldPokemons = JSON.parse(caughtPokemons);
    if (oldPokemons.includes(id)) {
      return;
    }
    oldPokemons.push(id);
    localStorage.setItem("caught", JSON.stringify(oldPokemons));
    updatePokemonsStatus();
    updatePokemonToCaught(id);
    return;
  }
  localStorage.setItem("caught", JSON.stringify(updateCaughtPokemons));
  updatePokemonsStatus();
  updatePokemonToCaught(id);
}
function updatePokemonsStatus() {
  const seenPokemons = localStorage.getItem("seen");
  const caughtPokemons = localStorage.getItem("caught");
  console.log(seenPokemons);
  if (seenPokemons === null) {
    document.getElementById("seen").innerText = `Seen : 0 `;
  } else {
    document.getElementById("seen").innerText = `Seen : ${
      JSON.parse(seenPokemons).length
    } `;
  }
  if (caughtPokemons === null) {
    document.getElementById("caught").innerText = `Caught : 0 `;
  } else {
    document.getElementById("caught").innerText = `Caught : ${
      JSON.parse(caughtPokemons).length
    } `;
  }
}
function updatePokemonToSeen(id) {
  console.log(id);
  console.log(document.getElementById(`seen${id}`));
  document.getElementById(`seen${id}`).className = "green-text material-icons";
}
function updatePokemonToCaught(id) {
  console.log(id);
  console.log(document.getElementById(`caught${id}`));
  document.getElementById(`caught${id}`).className = "red-text material-icons";
}
updatePokemonsStatus();
