// Selectionner des elements => querySelector
const app = document.querySelector('#app');
const mainTitle = document.querySelector('#main-title');

// Les noeuds html sont des objets avec des propriétés et des méthodes (fonctions dans des objets)
app.style.backgroundColor = "blue";

// Pour modifier le contenu de la balise on peut utiliser innerHTML (pour insérer du HTML) ou innerText (pour insérer du texte)
app.innerHTML = "<h1>Hello World</h1>";
mainTitle.innerText = "Hey there";



// Pour créer des noeuds HTML on peut utiliser createElement
const catImage = document.createElement('img');
// Modifier les propriétés du noeud
catImage.src = "https://placekitten.com/200/286";
// Ajouter le noeud à un autre noeud
app.appendChild(catImage);

