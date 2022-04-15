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
