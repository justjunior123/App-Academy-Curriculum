

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
