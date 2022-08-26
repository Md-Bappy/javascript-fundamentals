// console.log("hello world");
// let myName = "bappy";
// let phoneNumber = 0172321124;
// console.log(myName);
// console.log(phoneNumber);
// phoneNumber = 1221;
// console.log(typeof phoneNumber);
// let companyName = "b";
// console.log(companyName);

// //math operations
// const currentYear = 2022;
// const ageTompa = currentYear - 1998;
// const ageRahat = currentYear - 1996;
// console.log(ageTompa, ageRahat);

// //conditionals or constrols structure
// const year = 22;
// if (year >= 18) {
//   console.log("you are select");
// } else {
//   console.log("you are not select");
// }

// // if......else.if.........else
// const money = 380;
// const pizzaPrice = 350;
// const burggerPrice = 289;
// const milkShake = 80;
// const singaraPrice = 5;
// if (money >= pizzaPrice) {
//   console.log("pizza khabo");
// } else if (money >= burggerPrice) {
//   console.log("burgger khabo");
// } else if (money >= milkShake) {
//   console.log("milkshake khabo");
// } else if (money >= singaraPrice) {
//   console.log("singara khabo");
// } else {
//   console.log("pani khabo");
// }

// //grade calculation
// const marks = 78;
// if (marks >= 80) {
//   console.log("A+");
// } else if (marks >= 70) {
//   console.log("A");
// } else if (marks >= 60) {
//   console.log("A");
// } else if (marks >= 50) {
//   console.log("B");
// } else if (marks >= 40) {
//   console.log("c");
// } else if (marks > 32) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// const inputY = "sample";
// console.log(inputY + 10 + 20);
// console.log(inputY - 10);

// //trouthy and falsy values
// //falsy values: 0,  "",  undefined,  null,  nan
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// //equality operators
// /*
//       =               ....................assign
//       ==   or   ===         ..............equality
//       !=   or   !==            ............not equal
// */

// // and , or (&&, ||)
// const saveMoney = 150000;
// const ownHouse = false;
// const hasBusiness = true;
// if ((saveMoney && ownHouse >= 200000) || hasBusiness) {
//   console.log("taholay tomer biya hobay");
// } else {
//   console.log("taholay tomer biya hobay na");
// }

// const pocketMoney = 200;
// const timeLeft = 5;
// if (pocketMoney >= 250 || timeLeft >= 5) {
//   console.log("you are right");
// } else {
//   console.log("you are wrong");
// }

// //leap year testiong
// /*
// year % 400 === 0
// year % 4 === 0 && year % 100 !== 0
// */
// const lyear = 2022;
// if (typeof year === "number") {
//   if (lyear % 400 === 0 || (lyear % 4 === 0 && lyear % 100 !== 0)) {
//     console.log(`${lyear} is a leap year`);
//   } else {
//     console.log(`${lyear} is not a leap year`);
//   }
// } else {
//   console.log("Emter a valid year");
// }

// //swich case statements
// const day = "thursday";
// switch (day) {
//   case "saturday":
//     console.log("no class!");
//     break;
//   case "sunday":
//     console.log("clss ace");
//     break;
//   case "monday":
//     console.log("no class!");
//     break;
//   case "tuesday":
//   case "wednesday":
//     console.log("no class!");
//     break;
//   case "thursday":
//     console.log("class ace");
//     break;
//   default:
//     console.log("not a valid day!");
// }

// //statement and expression
// //expression can produce values
// //statement can't produce values, only manupulates expression
// const text = "23 is bigger number";
// const text2 = "23 is not bigger number";
// if (23 > 30) {
//   console.log(text);
// } else {
//   console.log(text2);
// }

// //ternary operator
// let yourNumber = 150;

// if (yourNumber < 50) {
//   console.log("your number is big");
// } else {
//   console.log("your number is not big");
// }

// if (yourNumber < 50) console.log("your number is big");
// else console.log("your number is not big");

// yourNumber > 50
//   ? console.log("your number is big")
//   : console.log("your number is not big");

// yourNumber === 100 ? (yourNumber += 100) : (yourNumber -= 100);
// console.log(yourNumber);

// const a = 5;
// const b = 10;
// let c;
// a > b ? (c = a + b) : (c = b - a);
// console.log(c);
