const pokemon = document.querySelector('#pokemon');
const nomePokemon = document.querySelector('h1');
const img = document.querySelectorAll('img');
const h2 = document.querySelector('h2');
const habilidades = document.querySelectorAll('p');

pokemon.addEventListener('change', buscarPokemon);

function buscarPokemon() {
  const promiseResponse = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.value.toLowerCase()}`);

  promiseResponse.then((resposta) => {
    const promiseBody = resposta.json();

    promiseBody.then((body) => {
      nomePokemon.textContent = body.name;
      img[0].src = body.sprites.front_default;
      img[1].src = body.sprites.front_shiny;
      h2.classList.add('show');

      for (i = 0; i < habilidades.length; i++) {
        if (i >= body.abilities.length) {
          habilidades[i].textContent = "";
        }

        habilidades[i].textContent = (body.abilities[i].ability.name).replace('-', ' ');
        if (body.abilities.length > 1 && i === body.abilities.length - 1) {
          habilidades[i].textContent += " (Hidden Ability)";
        }
      }
    })
  })
}