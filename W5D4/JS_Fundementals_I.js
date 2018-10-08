

// -- Scope --
//  1. The following will output the string in the if block changing the
//  the value of x, even though it was returned within the same scope of
//  where console is defined.

// 1. function mysteryScoping1() {
//   var x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
// mysteryScoping1();
// ------------------------------------------------------------

// 2. The following code will print out both x values. It is because of
// the datatype that const represents

// 2. function mysteryScoping2() {
//   const x = 'out of block';
//   if (true) {
//     const x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// mysteryScoping2();
// -------------------------------------------------------------

//  3. The following will produce a fatal error and will not let the code
// run properly. We would have to rename the variables being assigned to
// fix.

// 4. function mysteryScoping3() {
//   const x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }

// mysteryScoping3();

// -------------------------------------------------------------

// 4. The followinng will allow for x to be used twice in the defined
// function. it will print both statements.

// 4. function mysteryScoping4() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// mysteryScoping4();

// -------------------------------------------------------------
// 5. The following code will throw and error because we cannot have
// duplicate variables assigned and used in the same scope of the function.

// 5. function mysteryScoping5() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   let x = 'out of block again';
//   console.log(x);
// }
//
//   mysteryScoping5();
// -------------------------------------------------------------

// -- General Printing in Javascript--
// console.log("Does this work running in Atom?");

// -- General Constructor Function --
// function NBAPlayer(name,team,pos){
  // this.name = name
  // this.team = team
  // this.pos = pos
// }
//  Creating a new class object of NBAPlayer
// const Curry = new NBAPlayer(){};
//  We want to let the NBA Players to be able to dunk
// NBAPlayer.prototype.dunk = function () {};
// calling the dunk function specifically on the NBA object.
// Curry.dunk();

// -- Interpolation in Javascript --
// console.log('${this.name} dunks!');

// -- Closures and Callbacks --
// 1. The following code will allow us to call a variable defined as an
// argument of the soundName function even though it was not explicitly
// named in the makeSound function.

// 1. function soundName(sound, times) {
  // function makeSound() {
  //   console.log('${sound}');
  // }
  //
  // for (var i = 0; i < times i++) {
  //   makeSound();
  // }
// }

// -----------------------------------------------------------------
// 2. Here the arr argument was never explicitly defined in the summer
//  function. However we are still able to call it as well as use the
//  sum variable that is also outside the scope of the summer function.
//  The sum variable will be updated appropriately.

// 2. function summation(arr) {
//   let sum = 1;
//
//   // Closure
//   function summer() {
//     for (var i = 0; i < arr.length; i++) {
//       sum *= arr[i];
//     }
//   }
//
//   summer();
//   return sum;
//
// }
//
// console.log(summation([1,2,3,4]));

// -----------------------------------------------------------------
// 3.The following are specifically callbacks. We are also going to show
// different iterations of how to code the same code in different Javascript
// versions.

// let callback = function() {
//   console.log('It has been 5 seconds');
// };
//
// let timeToWait = 5000;
//
// global.setTimeout(callback,timeToWait);
//
// // More likely to see in the industry
//
// global.setTimeout(function () {
//   console.log('It has been 5 seconds');
// }, 5000);
// // This ^^ is ES5.
//
// // This is ES6
//
// global.setTimeout(() => console.log("It has been 5 seconds"),5000);


// -----------------------------------------------------------------

// madLib
// Write a function that takes three strings - a verb, an adjective, and
// a noun - uppercases and interpolates them into the sentence "We shall
// VERB the ADJECTIVE NOUN". Use ES6 template literals.

// function madLib(verb,adjective,noun) {
//
//   console.log( `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}` );
//
// }
//
// madLib('walk','cat','there');

// ------------------------------------------------------------------

// isSubString
// i. A String, called searchString.
// ii. A String, called subString.
// Output: A Boolean. true if the subString is a part of the searchString.

// > isSubstring("time to program", "time")
// true
//
// > isSubstring("Jump for joy", "joys")
// false

// function isSubString(searchString,subString) {
//   if (searchString.includes(subString)) {
//     return true;
//   }
//
//   else {
//     return false;
//   }
//
// }
//
// isSubString("time to program", "time");

// ------------------------------------------------------------------

// fizzBuzz

// 3 and 5 are magic numbers.
// Define a function fizzBuzz(array) that takes an array and returns a
// new array of every number in the array that is divisible by either 3
// or 5, but not both.

// function fizzBuzz(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 15 === 0) {
//       arr.splice(i,1,'fizzbuzz');
//     }
//
//     else if (arr[i] % 5 === 0) {
//       arr.splice(i,1,'fizz');
//     }
//
//     else if (arr[i] % 3 === 0) {
//       arr.splice(i,1,'buzz');
//     }
//   }
//   console.log(`${arr}`);
// }
//
// fizzBuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);

// ------------------------------------------------------------------
// isPrime

// Define a function isPrime(number) that returns true if number is
// prime. Otherwise, false. Assume number is a positive integer.

// > isPrime(2)
// true
//
// > isPrime(10)
// false
//
// > isPrime(15485863)
// true
//
// > isPrime(3548563)
// false

// function isPrime(number) {
//   var primeArr = [];
//
//   if (number === 2) {
//     return true;
//   }
//
//   for (var i = 2; i < number; i++) {
//     primeArr.push(i);
//   }
//
//   for (var i = 0; i < primeArr.length; i++) {
//
//     if ( number % primeArr[i] === 0){
//       return false;
//     }
//   }
//
//   if ( primeArr.length === 0 ){
//     return false;
//   }
//
//   return true;
// }
//
// isPrime(2);

// ------------------------------------------------------------------

// sumOfNPrimes

// Using firstNPrimes, write a function sumOfNPrimes(n) that returns the
// sum of the first n prime numbers. Hint: use isPrime as a helper method.

// > sumOfNPrimes(0)
// 0
//
// > sumOfNPrimes(1)
// 2
//
// > sumOfNPrimes(4)
// 17

// function isPrime(number) {
//   var primeArr = [];
//
//   if (number === 2) {
//     return true;
//   }
//
//   for (var i = 2; i < number; i++) {
//     primeArr.push(i);
//   }
//
//   for (var i = 0; i < primeArr.length; i++) {
//
//     if ( number % primeArr[i] === 0){
//       return false;
//     }
//   }
//
//   if ( primeArr.length === 0 ){
//     return false;
//   }
//
//   return true;
// }
//
// function firstNPrimes(number) {
//   var result = [];
//   var i = 0;
//
//   while (result.length < number) {
//     console.log(isPrime(i));
//     if (isPrime(i)) {
//       result.push(i);
//     }
//     i++;
//   }
//   return result;
// }
//
// function sumOfNPrimes(array) {
//
//   var answer =firstNPrimes(array);
//   console.log(array);
//   if (answer === undefined) {
//     return 0;
//   }
//   if (answer.length === 0) {
//     return 0;
//   }
//   else {
//     var sum = 0;
//     for (var i = 0; i < answer.length; i++) {
//       sum += answer[i];
//     }
//   }
//   return sum;
// }
