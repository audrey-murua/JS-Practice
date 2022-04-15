//Coding Challenge #1

/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:

1. Store Mark's and John's mass and height in variables

2. Calculate both their BMIs using the formula (you can even implement both
versions)

3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:

Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. */

//Task #1

let marksAvgMass = (78 + 95) / 2;
let marksAvgHeight = (1.69 + 1.88) / 2;

console.log(marksAvgMass, marksAvgHeight);

let johnsAvgMass = (92 + 85) / 2;
let johnsAvgHeight = (1.95 + 1.76) / 2;

console.log(johnsAvgMass, johnsAvgHeight);

//Task #2

let marksBMI = marksAvgMass / marksAvgHeight ** 2;
let marksBMI2 = marksAvgMass / (marksAvgHeight * marksAvgHeight);

console.log(marksBMI, marksBMI2);

let johnsBMI = johnsAvgMass / johnsAvgHeight ** 2;
let johnsBMI2 = johnsAvgMass / (johnsAvgHeight * johnsAvgHeight);

console.log(johnsBMI, johnsBMI2);