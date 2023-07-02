//In here I am getting the randomPokemon Div
const randomPokemon = document.getElementById("randomPokemon");
const fetchPokemon = async () => {
  const pokemonAPI = `https://pokeapi.co/api/v2/pokemon?limit=20`;
  const response = await fetch(pokemonAPI);
  const data = await response.json();
  const pokemon = data.results.map((result, index) => ({
    ...result,
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));
  displayPokemon(pokemon);
};

//This is Displaying 20 Pokemons to the screen
const displayPokemon = (pokemon) => {
  const pokemonHTMLString = pokemon
    .map(
      (pokemon) => `
    <div class='pokemonCard' onclick='selectPokemon(${pokemon.id})'>
      <div class='imageDiv'>
        <img class='pokemonImage' src='${pokemon.image}' />
      </div>
      <div class='pokemonName'>
        <h4>${pokemon.name}</h4>
      </div>
    </div>
  `
    )
    .join("");
  randomPokemon.innerHTML = pokemonHTMLString;
};

//This is fetching the data and passing the ID to pokemonPopup Function
const selectPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  pokemonPopup(data);
};

//This is Displaying the Indevidual Pokemon
const pokemonPopup = (data) => {
  const abilitiesHtml = data.abilities
    .map(
      (ability, index) => `
  <p class="ability${index + 1}">${ability.ability.name}</p>
`
    )
    .join("");

  /*This is removing the Seach Bar when I click on the Pokemon*/
  const navSection = document.getElementById("navSection");
  navSection.parentElement.removeChild(navSection);
  /**/

  const htmlString = `
    <section class='popupSection'>
      <div class='popupPokemon'>
        <div class='buttonDiv'>
          <button class='closeButton' id="closeButton" onclick="closePopup()">Close</button>
        </div>
        <div class='pokemonOuterSection'>
          <div class='popupPokemonCard'>
            <div class='nameAndHP'>
              <div class='pokemonName'>
                <h3>${data.name}</h3>
              </div>
              <div class='pokemonhp'>
                <h4>${data.stats[0].stat.name}</h4>
                <h3>${data.stats[0].base_stat}</h3>
              </div>
            </div>
            <div class='pokemonImageDiv'>
              <img class='pokemonImage' src='${data.sprites.other.dream_world.front_default}' />
            </div>
            <div class='pokemonAbilities'>
              <p>${abilitiesHtml}</p>
            </div>
            <div class='powerDiv'>
              <div class='pokemonPower'>
                <div class='attack'>
                  <img src='./Image/attack.png' />
                  <h4>${data.stats[1].base_stat}</h4>
                </div>
                <div class='shield'>
                  <img src='./Image/shield.png' />
                  <h4>${data.stats[2].base_stat}</h4>
                </div>
                <div class='speed'>
                  <img src='./Image/speed.png' />
                  <h4>${data.stats[5].base_stat}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
  randomPokemon.innerHTML = htmlString;
};

//This is Closing Indevidual Pokemon Popup
const closePopup = () => {
  const popupSection = document.querySelector(".popupSection");
  popupSection.parentElement.removeChild(popupSection);

  fetchPokemon();
};

fetchPokemon();

//This is getting the First Pokemon in the Main Page
function firstPokemon() {
  const firstPokemon = document.getElementById("firstPokemonName");
  const first = document.getElementById("first");

  fetch(`https://pokeapi.co/api/v2/pokemon/25`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      firstPokemon.innerText = name.toUpperCase();

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      first.src = images;
    });
}
firstPokemon();

//This is getting the Second Pokemon in the Main Page
function secondPokemon() {
  const secondPokemon = document.getElementById("secondPokemonName");
  const second = document.getElementById("second");

  fetch(`https://pokeapi.co/api/v2/pokemon/2`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      secondPokemon.innerText = name.toUpperCase();

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      second.src = images;
    });
}
secondPokemon();

//This is getting the Third Pokemon in the Main Page
function thirdPokemon() {
  const thirdPokemon = document.getElementById("thirdPokemonName");
  const third = document.getElementById("three");

  fetch(`https://pokeapi.co/api/v2/pokemon/133`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      thirdPokemon.innerText = name.toUpperCase();

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      third.src = images;
    });
}
thirdPokemon();

//This is getting the Forth Pokemon in the Main Page
function forthPokemon() {
  const forthPokemon = document.getElementById("forthPokemonName");
  const forth = document.getElementById("four");

  fetch(`https://pokeapi.co/api/v2/pokemon/143`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      forthPokemon.innerText = name.toUpperCase();

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      forth.src = images;
    });
}
forthPokemon();

//This is getting the Fifth Pokemon in the Main Page
function fifthPokemon() {
  const fifthPokemon = document.getElementById("fifthPokemonName");
  const fifth = document.getElementById("five");

  fetch(`https://pokeapi.co/api/v2/pokemon/7`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      fifthPokemon.innerText = name.toUpperCase();

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      fifth.src = images;
    });
}
fifthPokemon();

//This is getting the Sixth Pokemon in the Main Page
function sixthPokemon() {
  const sixthPokemon = document.getElementById("sixthPokemonName");
  const sixth = document.getElementById("six");

  fetch(`https://pokeapi.co/api/v2/pokemon/6`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      sixthPokemon.innerText = name.toUpperCase();

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      sixth.src = images;
    });
}
sixthPokemon();

/*
const clickButton = document.getElementById("searchButton");
clickButton.addEventListener("click", randomPokemon1());
*/
/*
function getPokemon() {
  const userInput = document.getElementById("searchInput").value;
  fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

getPokemon();
*/
