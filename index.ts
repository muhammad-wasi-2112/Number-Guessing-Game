#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.gray.bold(`---------${chalk.magenta.bold("Number Guessing Game")}---------`));
do{
const randomNumber = Math.floor(Math.random()* 1 + 10 );

const guessNumber = await inquirer.prompt([
    {
      name:"userGuessNumber",
      type: "input",
      message:"Please Guess a Number Between 1-10:",
    }
]);

if (guessNumber.userGuessNumber === randomNumber){
    console.log(chalk.yellowBright.bold("Congratulations! you guess the right number"))
}
else {
    console.log(chalk.redBright.bold("Sorry! you guess the wrong number"))
}
}while(true);