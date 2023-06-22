//This Section is for Generating Pokemons that we see in the screen without serching for them.
function randomPokemon1() {
  const pokemonName1 = document.getElementById("pokemonName1");
  const pokemon1Image = document.getElementById("pokemon1Image");
  const pokemon1Ability1 = document.getElementById("pokemon1AbilityOne");
  const pokemon1Ability2 = document.getElementById("pokemon1AbilityTwo");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemonName1.innerText = name;

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      pokemon1Image.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon1Ability1.innerText = ability1;

      if (data.abilities.length >= 2) {
        const ability2 = data.abilities[1].ability.name;
        pokemon1Ability2.innerText = ability2;
      } else {
        pokemon1Ability2.style.display = "none"; // Hide the second ability
      }
    });
}
randomPokemon1();

function randomPokemon2() {
  const pokemonName2 = document.getElementById("pokemonName2");
  const pokemon2Image = document.getElementById("pokemon2Image");
  const pokemon2Ability1 = document.getElementById("pokemon2AbilityOne");
  const pokemon2Ability2 = document.getElementById("pokemon2AbilityTwo");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemonName2.innerText = name;

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      pokemon2Image.src = images;

      //This is for the Ability of the Pokemon
      const ability2 = data.abilities[0].ability.name;
      pokemon2Ability1.innerText = ability2;

      if (data.abilities.length >= 2) {
        const ability2 = data.abilities[1].ability.name;
        pokemon2Ability2.innerText = ability2;
      } else {
        pokemon2Ability2.style.display = "none"; // Hide the second ability
      }
    });
}
randomPokemon2();

function randomPokemon3() {
  const pokemonName3 = document.getElementById("pokemonName3");
  const pokemon3Image = document.getElementById("pokemon3Image");
  const pokemon3Ability1 = document.getElementById("pokemon3AbilityOne");
  const pokemon3Ability2 = document.getElementById("pokemon3AbilityTwo");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemonName3.innerText = name;

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      pokemon3Image.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon3Ability1.innerText = ability1;

      if (data.abilities.length >= 2) {
        const ability2 = data.abilities[1].ability.name;
        pokemon3Ability2.innerText = ability2;
      } else {
        pokemon3Ability2.style.display = "none"; // Hide the second ability
      }
    });
}
randomPokemon3();

function randomPokemon4() {
  const pokemonName4 = document.getElementById("pokemonName4");
  const pokemon4Image = document.getElementById("pokemon4Image");
  const pokemon4Ability1 = document.getElementById("pokemon4AbilityOne");
  const pokemon4Ability2 = document.getElementById("pokemon4AbilityTwo");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemonName4.innerText = name;

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      pokemon4Image.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon4Ability1.innerText = ability1;

      if (data.abilities.length >= 2) {
        const ability2 = data.abilities[1].ability.name;
        pokemon4Ability2.innerText = ability2;
      } else {
        pokemon4Ability2.style.display = "none"; // Hide the second ability
      }
    });
}
randomPokemon4();

function randomPokemon5() {
  const pokemonName5 = document.getElementById("pokemonName5");
  const pokemon5Image = document.getElementById("pokemon5Image");
  const pokemon5Ability1 = document.getElementById("pokemon5AbilityOne");
  const pokemon5Ability2 = document.getElementById("pokemon5AbilityTwo");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemonName5.innerText = name;

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      pokemon5Image.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon5Ability1.innerText = ability1;

      if (data.abilities.length >= 2) {
        const ability2 = data.abilities[1].ability.name;
        pokemon5Ability2.innerText = ability2;
      } else {
        pokemon5Ability2.style.display = "none"; // Hide the second ability
      }
    });
}
randomPokemon5();

function randomPokemon6() {
  const pokemonName6 = document.getElementById("pokemonName6");
  const pokemon6Image = document.getElementById("pokemon6Image");
  const pokemon6Ability1 = document.getElementById("pokemon6AbilityOne");
  const pokemon6Ability2 = document.getElementById("pokemon6AbilityTwo");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemonName6.innerText = name;

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      pokemon6Image.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon6Ability1.innerText = ability1;

      if (data.abilities.length >= 2) {
        const ability2 = data.abilities[1].ability.name;
        pokemon6Ability2.innerText = ability2;
      } else {
        pokemon6Ability2.style.display = "none"; // Hide the second ability
      }
    });
}
randomPokemon6();

function randomPokemon7() {
  const pokemonName7 = document.getElementById("pokemonName7");
  const pokemon7Image = document.getElementById("pokemon7Image");
  const pokemon7Ability1 = document.getElementById("pokemon7AbilityOne");
  const pokemon7Ability2 = document.getElementById("pokemon7AbilityTwo");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemonName7.innerText = name;

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      pokemon7Image.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon7Ability1.innerText = ability1;

      if (data.abilities.length >= 2) {
        const ability2 = data.abilities[1].ability.name;
        pokemon7Ability2.innerText = ability2;
      } else {
        pokemon7Ability2.style.display = "none"; // Hide the second ability
      }
    });
}
randomPokemon7();

function randomPokemon8() {
  const pokemonName8 = document.getElementById("pokemonName8");
  const pokemon8Image = document.getElementById("pokemon8Image");
  const pokemon8Ability1 = document.getElementById("pokemon8AbilityOne");
  const pokemon8Ability2 = document.getElementById("pokemon8AbilityTwo");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemonName8.innerText = name;

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      pokemon8Image.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon8Ability1.innerText = ability1;

      if (data.abilities.length >= 2) {
        const ability2 = data.abilities[1].ability.name;
        pokemon8Ability2.innerText = ability2;
      } else {
        pokemon8Ability2.style.display = "none"; // Hide the second ability
      }
    });
}
randomPokemon8();

function randomPokemon9() {
  const pokemonName9 = document.getElementById("pokemonName9");
  const pokemon9Image = document.getElementById("pokemon9Image");
  const pokemon9Ability1 = document.getElementById("pokemon9AbilityOne");
  const pokemon9Ability2 = document.getElementById("pokemon9AbilityTwo");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemonName9.innerText = name;

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      pokemon9Image.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon9Ability1.innerText = ability1;

      if (data.abilities.length >= 2) {
        const ability2 = data.abilities[1].ability.name;
        pokemon9Ability2.innerText = ability2;
      } else {
        pokemon9Ability2.style.display = "none"; // Hide the second ability
      }
    });
}
randomPokemon9();

function randomPokemon10() {
  const pokemonName10 = document.getElementById("pokemonName10");
  const pokemon10Image = document.getElementById("pokemon10Image");
  const pokemon10Ability1 = document.getElementById("pokemon10AbilityOne");
  const pokemon10Ability2 = document.getElementById("pokemon10AbilityTwo");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemonName10.innerText = name;

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      pokemon10Image.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon10Ability1.innerText = ability1;

      if (data.abilities.length >= 2) {
        const ability2 = data.abilities[1].ability.name;
        pokemon10Ability2.innerText = ability2;
      } else {
        pokemon10Ability2.style.display = "none"; // Hide the second ability
      }
    });
}
randomPokemon10();

function randomPokemon11() {
  const pokemonName11 = document.getElementById("pokemonName11");
  const pokemon11Image = document.getElementById("pokemon11Image");
  const pokemon11Ability1 = document.getElementById("pokemon11AbilityOne");
  const pokemon11Ability2 = document.getElementById("pokemon11AbilityTwo");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemonName11.innerText = name;

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      pokemon11Image.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon11Ability1.innerText = ability1;

      if (data.abilities.length >= 2) {
        const ability2 = data.abilities[1].ability.name;
        pokemon11Ability2.innerText = ability2;
      } else {
        pokemon11Ability2.style.display = "none"; // Hide the second ability
      }
    });
}
randomPokemon11();

function randomPokemon12() {
  const pokemonName12 = document.getElementById("pokemonName12");
  const pokemon12Image = document.getElementById("pokemon12Image");
  const pokemon12Ability1 = document.getElementById("pokemon12AbilityOne");
  const pokemon12Ability2 = document.getElementById("pokemon12AbilityTwo");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemonName12.innerText = name;

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      pokemon12Image.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon12Ability1.innerText = ability1;

      if (data.abilities.length >= 2) {
        const ability2 = data.abilities[1].ability.name;
        pokemon12Ability2.innerText = ability2;
      } else {
        pokemon12Ability2.style.display = "none"; // Hide the second ability
      }
    });
}
randomPokemon12();

/*-----------------*/

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
