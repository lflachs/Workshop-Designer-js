// Primitifs - Valeurs ne peuvent pas changer
const myName = "Léonard"; // String - Chaine de caractère
let myAge = 30; // Number
let petOwner = true; // Boolean
let petName = undefined; // Undefined (absence de donnée involontaire)
let haveChildren;

let city = null; // null (absence de donnée volontaire)

city = "Berlin"; // Réassigner une variable
// myName = "Bob" => Ne fonctionneras pas avec const

// Afficher un message dans la console:
console.log("Hello World"); // Afficher des valeurs
console.log(myName); // Afficher la valeur de la variable

// Non Primitifs - Valeurs peuvent changer
const car = {
  brand: "BMW",
  doors: 4,
  isAvailable: true,
  color: "Red",
}; // Object - Un objet contiens des propriétés - avec des clefs et des valeurs (key/value pairs)
console.log(car.brand); // on accède à une propriété en utilisant le point "."

car.horses = 200; // On peut ajouter des propriétés à nos objets

function sayHello(name) {
  console.log("Hello " + name);
  console.log(`Hello ${name}`);
} // Une fonction est un bout de code réutilisable

sayHello("Bob"); // On invoque une fonction en utilisant les parenthèses
sayHello("Toto");

car.start = function () {
  console.log("vroooooom");
}; // Une fonction peut être ajoutée à un objet - Cela s'appelle une méthode
car.buy = function () {
  // this.isAvailable = false;
  car.isAvailable = false;
};
car.start();
car.buy();

car.colors = ["Red", "Black", "Green"]; // On peut ègalement ajouter des tableaux à des objets -
// Un tableau est un type d'objet
car.colors[0]; // On accède à une propriété d'un tableau en utilisant [n] - Attention un tableau commence toujours à zéro

const carAvailables = [
  { brand: "BMW", doors: 4, isAvailable: true, color: "Red" },
  { brand: "Renault", doors: 4, isAvailable: false, color: "Grey" },
]; // On peut également créer des tableaux d'objets

carAvailables[0];

// Faire une boucle pour répeter du code
// 1. On crée la variable d'increment (i) et on lui assigne une valeur de départ
// 2. On définis la condition à atteindre
// 3. On définis pour chaque tour de boucle l'action à faire
for (let i = 0; i < 10; i++) {
  console.log("Tour numéro " + i);
  // console.log(`Tour numéro ${i}`);
}

// On peut boucler sur un tableau pour en afficher tous les éléments
for (let i = 0; i < carAvailables.length; i++) {
  // i sera égal à 0, puis 1 jusqu'à carAvailables.length
  console.log(carAvailables[i].brand + " is available for sale");
}
