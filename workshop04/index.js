// import cat from "287.jpeg";

import animalsToAdopt from "./cats";
const header = document.querySelector("#main-header");

function createCard(img, title) {
  const cards = document.querySelector("#cards");

  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.classList.add("card-img");
  cardImg.style.backgroundImage = "url(" + img + ")";

  cardImg.style.backgroundImage = `url(${img})`;
  cardHeader.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardHeader.appendChild(cardBody);

  const cardTitle = document.createElement("h2");
  cardTitle.innerText = title;
  cardTitle.classList.add("card-title");
  cardBody.appendChild(cardTitle);

  const cardButton = document.createElement("button");
  cardButton.innerText = "Click Here";
  cardButton.classList.add("card-button");
  cardBody.appendChild(cardButton);
}

function createAnimalsCards(animals) {
  const cards = document.querySelector("#cards");
  cards.innerHTML = "";
  animals.forEach(function (animal) {
    console.log(animal);
    createCard(animal.picture, animal.name);
  });
}

function render() {
  createAnimalsCards(animalsToAdopt);
  const dropDown = document.createElement("select");
  header.appendChild(dropDown);

  animalsToAdopt.forEach(function (animal) {
    const option = document.createElement("option");
    option.value = animal.name;
    option.innerText = animal.name;
    dropDown.appendChild(option);
  });

  dropDown.addEventListener("change", function (event) {
    console.log(event.target.value);
    const newAnimalArray = animalsToAdopt.filter(function (animal) {
      return animal.name == event.target.value;
    });
    createAnimalsCards(newAnimalArray);
  });
}

render();
