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
  //   cardImg.style.backgroundImage = `url(${img})`;
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

createCard("https://placekitten.com/408/287", "Cool cat");
createCard("https://placekitten.com/409/187", "Nice cat");
