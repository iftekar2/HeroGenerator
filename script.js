const ACCESS_TOKEN = "802124224942349";
const URL = `https://superheroapi.com/api.php/${ACCESS_TOKEN}`;
//This is to get image and show the image in the page.
function homePageHeros() {
  const getHeroOne = (id, name) => {
    fetch(`${URL}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById(
          "heroOne"
        ).innerHTML = `<img src="${data.image.url}" />`;
        document.getElementById("heroNameOne").innerHTML = `${data.name}`;
        document.getElementById(
          "movieStudioOne"
        ).innerHTML = `${data.biography.publisher}`;
      });
  };

  const randomHero = () => {
    const numHero = 731;
    return Math.floor(Math.random() * numHero) + 1;
  };
  getHeroOne(randomHero());

  const getHeroTwo = (id, name) => {
    fetch(`${URL}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById(
          "heroTwo"
        ).innerHTML = `<img src="${data.image.url}" />`;
        document.getElementById("heroNameTwo").innerHTML = `${data.name}`;
        document.getElementById(
          "movieStudioTwo"
        ).innerHTML = `${data.biography.publisher}`;
      });
  };

  getHeroTwo(randomHero());

  const getHeroThree = (id, name) => {
    fetch(`${URL}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById(
          "heroThree"
        ).innerHTML = `<img src="${data.image.url}" />`;
        document.getElementById("heroNameThree").innerHTML = `${data.name}`;
        document.getElementById(
          "movieStudioThree"
        ).innerHTML = `${data.biography.publisher}`;
      });
  };

  getHeroThree(randomHero());

  const getHeroFour = (id, name) => {
    fetch(`${URL}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById(
          "heroFour"
        ).innerHTML = `<img src="${data.image.url}" />`;
        document.getElementById("heroNameFour").innerHTML = `${data.name}`;
        document.getElementById(
          "movieStudioFour"
        ).innerHTML = `${data.biography.publisher}`;
      });
  };

  getHeroFour(randomHero());

  const getHeroFive = (id, name) => {
    fetch(`${URL}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById(
          "heroFive"
        ).innerHTML = `<img src="${data.image.url}" />`;
        document.getElementById("heroNameFive").innerHTML = `${data.name}`;
        document.getElementById(
          "movieStudioFive"
        ).innerHTML = `${data.biography.publisher}`;
      });
  };

  getHeroFive(randomHero());

  const getHeroSix = (id, name) => {
    fetch(`${URL}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById(
          "heroSix"
        ).innerHTML = `<img src="${data.image.url}" />`;
        document.getElementById("heroNameSix").innerHTML = `${data.name}`;
        document.getElementById(
          "movieStudioSix"
        ).innerHTML = `${data.biography.publisher}`;
      });
  };

  getHeroSix(randomHero());

  const getHeroSeven = (id, name) => {
    fetch(`${URL}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById(
          "heroSeven"
        ).innerHTML = `<img src="${data.image.url}" />`;
        document.getElementById("heroNameSeven").innerHTML = `${data.name}`;
        document.getElementById(
          "movieStudioSeven"
        ).innerHTML = `${data.biography.publisher}`;
      });
  };

  getHeroSeven(randomHero());

  const getHeroEight = (id, name) => {
    fetch(`${URL}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById(
          "heroEight"
        ).innerHTML = `<img src="${data.image.url}" />`;
        document.getElementById("heroNameEight").innerHTML = `${data.name}`;
        document.getElementById(
          "movieStudioEight"
        ).innerHTML = `${data.biography.publisher}`;
      });
  };

  getHeroEight(randomHero());
}

homePageHeros();
