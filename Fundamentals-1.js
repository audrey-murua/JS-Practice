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
let population = "329.5 million";

console.log(country);
console.log(continent);
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
conesole.log(javascriptIsFun);
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

console.log(typeof isIsland);

console.log(typeof language);

console.log(typeof population);

console.log(typeof country);


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

isIsland = true;