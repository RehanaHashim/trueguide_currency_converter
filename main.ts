#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.greenBright.bold("\n\tWelcome to my new project currency_convertor\n\t"));

// Define the list of currencies and their exchange rates

let exchange_rate: any ={
    "USD": 1, //base currency
    "EUR": 1.06,
    "UAE": 3.67,
    "JYP": 154.50,
    "CAD": 1.38,
    "AUD": 1.56,
    "PKR": 278.36,
    "INR": 83.61
    
}
// prompt the users to select currencies
let user_answer = await inquirer.prompt(
    [
        {
            name: "from_currency",
            type: "list",
            message: (chalk.blue("Select the currency to convert from:")),
            choices: ["USD", "EUR", "UAE", "JYP", "CAD", "AUD", "PKR", "INR"]
        },
        
        {
            name: "to_currency",
            type: "list",
            message: (chalk.blue("Select the currency to convert into:")),
            choices: ["USD", "EUR", "UAE", "JYP", "CAD", "AUD", "PKR","INR"]
        },
        
        {
            name: "amount",
            type: "input",
            message: (chalk.blue("Enter the amount to convert :"))
        }
    ]
);


let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

// using curency converter by formula
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

console.log(`Converted Amount = ${chalk.bgBlackBright(converted_amount.toFixed(2))}`);