function sum(a, b) {
  return a, b; // le return est le résultat de la fonction après toutes les opérations
}

function celciusToFarenheit(tempCelcius) {
  const resultFarenheit = tempCelcius * 1.8 + 32;
  return resultFarenheit;
}

export default {
  sum: sum,
  celciusToFarenheit: celciusToFarenheit,
  toto: "Hey",
};

// module.exports = {
//   sum: sum,
//   celciusToFarenheit: celciusToFarenheit,
//   toto: "Hey",
// };
