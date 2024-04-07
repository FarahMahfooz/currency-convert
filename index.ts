#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n\t WELL COME IN CURRENCY-CONVERTER\n"))
// Define the list of currencies and their exchang rate.
let exchangr_rate: any = {
    "USD": 1, // Base Currency
    "EUR":0.9, // European Currency
    "JYP":113,  // Japense Currency
    "CAD":1.3, // Canadian Currency
    "AUD":1.65, // Australian Dollar
    "PKR":277.70, // Pakistan Rupees
}

//Define the list of currencies to convert from and to
let user_answer = await inquirer.prompt([
    { name:"from_currency",
      type:"list",
      message:chalk.green(" select the currency to convert from:"),
      choices:["USD","EUR","JYP","CAD","AUD","PKR"]

    },
    { name:"to_currency",
      type:"list",
      message:chalk.redBright("select the currency to convert into:"),
      choices:["USD","EUR","JYP","CAD","AUD","PKR"]

    },
    {
     name:"amount",
     type:"input",
     message:chalk.yellowBright("Enter the amount to convert:")
    }

]);
// perform currency conversion by using formula
let from_amount =exchangr_rate[user_answer.from_currency]
let to_amount = exchangr_rate[user_answer.to_currency]
let amount = user_answer.amount

//formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display the converted amount
console.log (`converted Amount = ${chalk.greenBright( converted_amount.toFixed(2))}`);






