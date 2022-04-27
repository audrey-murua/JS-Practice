// Practice

console.log("Hello World!");

let js = "amazing";

// if (js === "amazing") {
//     alert("JavaScript is awesome!");
// }

js = "boring";

if (js === "amazing") {
    console.log("JavaScript is AWESOME!");
} else {
    console.log("NO WAY!")
}


// VARIABLES

let firstName = "Audrey";
console.log(firstName);
console.log(firstName);

//Variable names can have underscores

let first_last_name = "Audrey Murua";
console.log(first_last_name);

//Descriptive variable names

let oldestDog = "Hailey";
let youngestDog = "Harley";
let cleanestDog = "Navi";

console.log(oldestDog);
console.log(youngestDog);
console.log(cleanestDog);

//Constant variable names can be completely capitalized 
const PI = 3.1415;



//Practice Assignment - Values and Variables

/* 1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console */

// let country = "United States";
// let continent = "North America";
let population = 329.5;

// console.log(country);
// console.log(continent);
console.log(population);


// DATA TYPES

// Boolean

let javascriptIsFun = true;
console.log(javascriptIsFun);

// Typeof (checks data types)

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 100);
console.log(typeof "hello world!");


//Reassigning Variables

javascriptIsFun = "YES!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

//Undefined Variable

let year;
console.log(year);
console.log(typeof year);

//Reassigned Undefined Variable

year = 2022;
console.log(typeof year);

//Null (type is an object)

console.log(typeof null);



//Practice Assignment - Data Types

/* 1. Declare a variable called'isIsland'and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
2. Log the typesof 'isIsland','population','country'and'language' to the console */

// let isIsland = false;

let language;

// console.log(typeof isIsland);

console.log(typeof language);

console.log(typeof population);

// console.log(typeof country);


//DECLARING VARIABLES

let age = 30;
age = 31;

const birthYear = 1950;

var month = "march";
month = "april";



//Practice Assignment - Let, Const, Var

/* 1. Set the valueof 'language' to the language spoken where you live(some countries have multiple languages, but just choose one)
2. Think about which variables should be const variables(which values will never change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now,and observe what happens */

language = "english";

const isIsland = false;

const continent = "North America"

const country = "United States";

// isIsland = true;


// BASIC OPERATORS

const now = 2055;

// Subtraction

const futureAge = now - 1930;
console.log(futureAge);

const futureAgeTwo = now - 1925;
console.log(futureAgeTwo);

// Multiplication, Divison, Exponent

console.log(futureAge * 2, futureAge/ 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// Concatenation

const firstName1 = "Audrey";
const lastName1 = "Murua";

console.log(firstName1 + " " + lastName1);

// Assignment Operator

let x = 10 + 5;
x += 10; // x = x + 10; equals 25
x *= 4; // x = x * 4; equals 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison Operator

console.log(futureAge > futureAgeTwo); // false
console.log(futureAgeTwo >= 18);

const legalAge = futureAgeTwo >= 18; // holds boolean value

console.log(now - 1930 > now - 1925); 



//Practice Assignment - Basic Operators

/* 1. If your country split in half,and each half would contain half the population, then how many people would live in each half?
2. Increase the population of your country by 1and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created,create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese' */

let halfOfCountry = population / 2;
console.log(halfOfCountry);

halfOfCountry++;
console.log(halfOfCountry);

const finland = 6;
console.log(finland < population);

const averagePopulationOfACountry = 33;
console.log(averagePopulationOfACountry > population);

let description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);


// OPERATOR PRECEDENCE

let a, b;
a = b = 25 - 10 - 5;
// a = b = 10, b = 10, a = b
console.log(a, b); // 10, 10


console.log(futureAge, futureAgeTwo);
const averageAge = (futureAge + futureAgeTwo) / 2; //Grouping or Parenthesis takes highest precedence
console.log(averageAge);


// STRINGS AND TEMPLATE LITERALS

//String Concatenation

const famousTurtle = "Allison";
const turtleWeight = 70;
const yearFound = 2005;
let currentYear = 2022;

const allison = famousTurtle + " is a " + turtleWeight + " lb turtle, who lost 3 of her flippers in a predator attack " + (currentYear - yearFound) + " years ago!";

console.log(allison);

// Template Literals - ES6 

const newAllisonString = `${famousTurtle} is a ${turtleWeight} lb turtle, who lost 3 of her flippers in a predator attack ${currentYear - yearFound} years ago!`;

console.log(newAllisonString);

console.log(`Backticks can be used on any regular string!`);

// Multi-line String

console.log("String with \n\multiple \n\lines!");
// \n\ = new line

// Multi-Line String - ES6

console.log(`String with
multiple
lines!`);
// \n\ is unnecessary with ES6 update



//Practice Assignment - String and Template Literals

/* 1. Recreate the 'description' variable from the last assignment,this time using the template literal syntax */

description = `${country} is in ${continent} and its ${population} million people speak ${language}`;

console.log(description);



// IF/ELSE STATEMENTS

const personsAge = 19;
const drivingAge = personsAge >= 18;

if(drivingAge) {
    console.log("You can now get a drivers license!");
}


const isOldEnough = 14;

if(isOldEnough >= 18) {
    console.log("You can now get a drivers license!");
} else {
    const yearsLeft = 18 - isOldEnough;
    console.log(`Sorry you're not old enough to drive, but you have ${yearsLeft} years left until you can!`);
}


const jonasBirthYear = 1991;
let century;

if(jonasBirthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);



//Practice Assignment - If/Else Statements

/* 1. If your country's population is greater than 33 million,log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original */

if(population > 33) {
    console.log(`${country}'s population is above average.`);
} else {
    const belowAveragePopulation = 33 - population;
    console.log(`${country}'s population is ${belowAveragePopulation} million below average.`);
}

// population = 13;
// population = 130;

// if(population > 33) {
//     console.log(`${country}'s population is above average.`);
// } else {
//     const belowAveragePopulation = 33 - population;
//     console.log(`${country}'s population is ${belowAveragePopulation} million below average.`);
// }



// TYPE CONVERSION AND COERCION

// Type Conversion

const inputYear = "1999";
console.log(inputYear + 18); // 199918
console.log(Number(inputYear)); // converts inputYear to a number by using the number function
console.log(Number(inputYear) + 18); // 1999 + 18 = 2017

console.log(Number('Audrey')); // NaN - invalid number

console.log(String(23)); // converts 23 to a string

// Type Coercion

console.log("I am " + 100 + " years old"); // + triggered type coercion to strings
console.log("23" - "10" - 3); // 10 - triggered type coercion to numbers
console.log("23" * "2"); // 46 * triggered type coercion to numbers
console.log("22" / "2"); // 11 / triggered type coercion to numbers

let n = "1" + 1;
n = n - 1;
console.log(n); // 10 

console.log(2 + 3 + 4 + "5"); // "95"
console.log("10" - "4" - "3" - 2 + "5"); // "15"



//Practice Assignment - Type Conversion and Coercion

/* 1. Predict the result of these 5 operations without executing them:

     '9' - '5';
     '19' - '13' + '17';
     '19' - '13' + 17;
     '123' < 57;
     5 + 6 + '4' + 9 - 4 - 2;

2. Execute the operations to check if you were right */


/* '9' - '5';  // my guess: 4
'19' - '13' + '17';  // my guess: 617
'19' - '13' + 17;  // my guess: 23
'123' < 57;  // my guess: false
5 + 6 + '4' + 9 - 4 - 2; */  // my guess: 1143

console.log('9' - '5'); //4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143



// TRUTHY AND FALSY VALUES

// 5 Falsy Values: 0, '', undefined, null, NaN

console.log(Boolean(0)); // falsy
console.log(Boolean(undefined)); // falsy
console.log(Boolean("Audrey")); // truthy
console.log(Boolean({})); // truthy
console.log(Boolean("")); // falsy
console.log(Boolean(" ")); // truthy

const money = 0;

if(money) {
    console.log("Go shopping!");
} else {
    console.log("Umm... maybe you should save...");
}

//prints else code block due to money variable being a falsy value

let height;

if (height) {
    console.log("Yay! Height is defined!");
} else {
    console.log("Height is UNDEFINED!");
}

// prints else code block due to height variable being a falsy value



// EQUALITY OPERATORS: == VS ===

const adultAge = 18;

if (adultAge === 18) {
    console.log(`You just became an adult! (strict)`);
}

if (adultAge == 18) {
    console.log(`You just became an adult! (loose)`);
}

console.log( 18 === 18); // true
console.log( 18 === 19); // false
console.log( '18' == 18); // true
console.log( '18' === 18); // false

// Prompt Function Using Equality Operators

let favoriteNumber = prompt(`What is your favorite number?`);
console.log(favoriteNumber);
console.log(typeof favoriteNumber);

if(favoriteNumber == 5) { // "5" == 5 is true
    console.log(`Cool, 5 is a great number.`);
}

favoriteNumber = Number(prompt(`What is your favorite number?`));

if(favoriteNumber === 5) { // 5 === 5 is true
    console.log(`Cool, 5 is an awesome number.`);
}

// Else If Using Equality Operators

if(favoriteNumber === 5) { // 5 === 5 is true
    console.log(`Cool, 5 is an awesome number.`);
} else if (favoriteNumber === 7) {
    console.log(`7 is a cool number.`);
} else {
    console.log(`This number isn't 5 or 7 :(`);
}

// Not Equal / Different Operator

if (favoriteNumber !== 5) {
    console.log(`Why isn't 5 your favorite number?!`);
}



//Practice Assignment - Equality Operators: == VS ===

/* 1. Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!'(use loose equality == for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1
4. Use an else block to log 'No borders'(this block will be executed when 'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1
8. Reflect on why we should use the === operator and type conversion in this situation */

let numNeighbors = prompt(`How many neighbor countries does your country have?`);

if(numNeighbors == 1) {
    console.log(`Only 1 border!`);
} else if (numNeighbors > 1) {
    console.log(`More than 1 border!`);
} else {
    console.log(`No borders!`);
}

numNeighbors = Number(prompt(`How many neighbor countries does your country have?`));

if(numNeighbors === 1) {
    console.log(`Only 1 border!`);
} else if (numNeighbors > 1) {
    console.log(`More than 1 border!`);
} else {
    console.log(`No borders!`);
}