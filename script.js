//This Section is for Generating Pokemons that we see in the screen without serching for them.
function randomPokemon1() {
  const pokemon1Name = document.getElementById("pokemon1Name");
  const image1 = document.getElementById("image1");
  const pokemon1Ability1 = document.getElementById("pokemon1Ability1");
  const pokemon1Ability2 = document.getElementById("pokemon1Ability2");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemon1Name.innerText = name.toUpperCase();

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      image1.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon1Ability1.innerText = ability1;

      const ability2 = data.abilities[1].ability.name;
      pokemon1Ability2.innerText = ability2;
    });
}
randomPokemon1();

function randomPokemon2() {
  const pokemon1Name = document.getElementById("pokemon2Name");
  const image2 = document.getElementById("image2");
  const pokemon1Ability1 = document.getElementById("pokemon2Ability1");
  const pokemon1Ability2 = document.getElementById("pokemon2Ability2");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemon1Name.innerText = name.toUpperCase();

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      image2.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon1Ability1.innerText = ability1;

      const ability2 = data.abilities[1].ability.name;
      pokemon1Ability2.innerText = ability2;
    });
}
randomPokemon2();

function randomPokemon3() {
  const pokemon1Name = document.getElementById("pokemon3Name");
  const image3 = document.getElementById("image3");
  const pokemon1Ability1 = document.getElementById("pokemon3Ability1");
  const pokemon1Ability2 = document.getElementById("pokemon3Ability2");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemon1Name.innerText = name.toUpperCase();

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      image3.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon1Ability1.innerText = ability1;

      const ability2 = data.abilities[1].ability.name;
      pokemon1Ability2.innerText = ability2;
    });
}
randomPokemon3();

function randomPokemon4() {
  const pokemon1Name = document.getElementById("pokemon4Name");
  const image4 = document.getElementById("image4");
  const pokemon1Ability1 = document.getElementById("pokemon4Ability1");
  const pokemon1Ability2 = document.getElementById("pokemon4Ability2");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemon1Name.innerText = name.toUpperCase();

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      image4.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon1Ability1.innerText = ability1;

      const ability2 = data.abilities[1].ability.name;
      pokemon1Ability2.innerText = ability2;
    });
}
randomPokemon4();

function randomPokemon5() {
  const pokemon1Name = document.getElementById("pokemon5Name");
  const image5 = document.getElementById("image5");
  const pokemon1Ability1 = document.getElementById("pokemon5Ability1");
  const pokemon1Ability2 = document.getElementById("pokemon5Ability2");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemon1Name.innerText = name.toUpperCase();

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      image5.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon1Ability1.innerText = ability1;

      const ability2 = data.abilities[1].ability.name;
      pokemon1Ability2.innerText = ability2;
    });
}
randomPokemon5();

function randomPokemon6() {
  const pokemon1Name = document.getElementById("pokemon6Name");
  const image6 = document.getElementById("image6");
  const pokemon1Ability1 = document.getElementById("pokemon6Ability1");
  const pokemon1Ability2 = document.getElementById("pokemon6Ability2");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemon1Name.innerText = name.toUpperCase();

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      image6.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon1Ability1.innerText = ability1;

      const ability2 = data.abilities[1].ability.name;
      pokemon1Ability2.innerText = ability2;
    });
}
randomPokemon6();

function randomPokemon7() {
  const pokemon1Name = document.getElementById("pokemon7Name");
  const image7 = document.getElementById("image7");
  const pokemon1Ability1 = document.getElementById("pokemon7Ability1");
  const pokemon1Ability2 = document.getElementById("pokemon7Ability2");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemon1Name.innerText = name.toUpperCase();

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      image7.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon1Ability1.innerText = ability1;

      const ability2 = data.abilities[1].ability.name;
      pokemon1Ability2.innerText = ability2;
    });
}
randomPokemon7();

function randomPokemon8() {
  const pokemon1Name = document.getElementById("pokemon8Name");
  const image8 = document.getElementById("image8");
  const pokemon1Ability1 = document.getElementById("pokemon8Ability1");
  const pokemon1Ability2 = document.getElementById("pokemon8Ability2");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemon1Name.innerText = name.toUpperCase();

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      image8.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon1Ability1.innerText = ability1;

      const ability2 = data.abilities[1].ability.name;
      pokemon1Ability2.innerText = ability2;
    });
}
randomPokemon8();

function randomPokemon9() {
  const pokemon1Name = document.getElementById("pokemon9Name");
  const image9 = document.getElementById("image9");
  const pokemon1Ability1 = document.getElementById("pokemon9Ability1");
  const pokemon1Ability2 = document.getElementById("pokemon9Ability2");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemon1Name.innerText = name.toUpperCase();

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      image9.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon1Ability1.innerText = ability1;

      const ability2 = data.abilities[1].ability.name;
      pokemon1Ability2.innerText = ability2;
    });
}
randomPokemon9();

function randomPokemon10() {
  const pokemon1Name = document.getElementById("pokemon10Name");
  const image10 = document.getElementById("image10");
  const pokemon1Ability1 = document.getElementById("pokemon10Ability1");
  const pokemon1Ability2 = document.getElementById("pokemon10Ability2");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemon1Name.innerText = name.toUpperCase();

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      image10.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon1Ability1.innerText = ability1;

      const ability2 = data.abilities[1].ability.name;
      pokemon1Ability2.innerText = ability2;
    });
}
randomPokemon10();

function randomPokemon11() {
  const pokemon1Name = document.getElementById("pokemon11Name");
  const image11 = document.getElementById("image11");
  const pokemon1Ability1 = document.getElementById("pokemon11Ability1");
  const pokemon1Ability2 = document.getElementById("pokemon11Ability2");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemon1Name.innerText = name.toUpperCase();

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      image11.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon1Ability1.innerText = ability1;

      const ability2 = data.abilities[1].ability.name;
      pokemon1Ability2.innerText = ability2;
    });
}
randomPokemon11();

function randomPokemon12() {
  const pokemon1Name = document.getElementById("pokemon12Name");
  const image12 = document.getElementById("image12");
  const pokemon1Ability1 = document.getElementById("pokemon12Ability1");
  const pokemon1Ability2 = document.getElementById("pokemon12Ability2");

  const randomNumber = Math.floor(Math.random() * 150);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      //This is for the name of the Pokemon
      const name = data.name;
      pokemon1Name.innerText = name.toUpperCase();

      //This is for the Image of the Pokemon
      const images = data.sprites.other.dream_world.front_default;
      image12.src = images;

      //This is for the Ability of the Pokemon
      const ability1 = data.abilities[0].ability.name;
      pokemon1Ability1.innerText = ability1;

      const ability2 = data.abilities[1].ability.name;
      pokemon1Ability2.innerText = ability2;
    });
}
randomPokemon12();
/**-----------------/

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
