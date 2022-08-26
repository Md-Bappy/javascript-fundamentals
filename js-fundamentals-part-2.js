"use strict";

// joinTheClass();
let y = 10;
y--;
console.log(y);

/*
pc on koro
google chrome a dhoko
fb te jao
meet er link a click koro
class a join koro
*/

//function declarations
function joinTheClass() {
  console.log("pc on karo");
  console.log("google chrome a dhoko");
  console.log("fb te jao");
  console.log("meet er link a click koro");
  console.log("class a join koro");
}
console.log(addTwoNumbers(20, 10));
joinTheClass(); //call or run or invoke
let x = 10;
x++;
console.log(x);



function addTwoNumbers(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
console.log(addTwoNumbers(5, 10));
console.log(addTwoNumbers(20, 30));



function oddNumberFinder(number) {
  if (number % 2 !== 0) {
    return `${number} is an old number`;
  } else {
    return `${number} is an even number`;
  }
}
console.log(oddNumberFinder(12));
const myNumber = oddNumberFinder(17);
console.log(myNumber);
