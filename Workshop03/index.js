import calculation from "./calculation.js";
import chalk from "chalk";

console.log(chalk.bgBlue.red("Hey Hey"));

const cinq = calculation.sum(2, 3);
console.log(calculation.sum(1, 2));

const tempNy = calculation.celciusToFarenheit(20);
console.log(tempNy);
