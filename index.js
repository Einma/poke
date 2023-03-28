async function fetchPokemon(pokeID) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`)
  const poke = await response.json()

  let img = document.createElement('img');
  img.src = poke.sprites.back_default
  let pokeName = document.createElement('h6');
  pokeName.textContent = `${poke.id}: ${poke.name}`;

  let pokeContainer = document.createElement('div')
  pokeContainer.appendChild(img);
  pokeContainer.appendChild(pokeName);

  pokeContainer['onmouseover'] = function () { img.src = poke.sprites.front_default }
  pokeContainer['onmouseout'] = function () { img.src = poke.sprites.back_default }

  let body = document.querySelector('body')
  body.appendChild(pokeContainer)
}

// fetchPokemon(22)

for (let i = 1; i < 152; i++) {
  fetchPokemon(i)
}