// Phase 2: Enumerable

// JavaScript enumerates over arrays differently than Ruby; rather than
// taking a block, they take a callback function, which is invoked for each
// element of the array. Take a look at the MDN Array Documentation if it
// is unclear how these methods are supposed to work.

// Array#myEach(callback) - receives a callback function and executes
// the callback for each element in the array. Note that JavaScript's
// forEach function has no return value (returns undefined)
// var array = [1,2,3,4];
//
// Array.prototype.myEach = function (callback) {
//   for (var i = 0; i < this.length; i++) {
//     callback(this[i]);
//   }
// };
//
// array.myEach( number => {
//   console.log(`${number * number}`);
//   }
// );

// ---------------------------------------------------------------------

// Array#myMap(callback) - receives a callback function, returns a new array
// of the results of calling the callback function on each element of the array

// should use myEach and a closure

// Array.prototype.myMap = function (callback) {
//   let answer = [];
//
//   this.myEach(element => answer.push(callback(element)));
//
//   return answer;
// };

// ---------------------------------------------------------------------

// Array#myReduce(callback[, initialValue]) - (like Ruby's Array#inject) receives
// a callback function, and optional initial value, returns an accumulator
// by applying the callback function to each element and the result of the

// last invocation of the callback (or initial value if supplied)

// Array.prototype.myReduce = function (callback, initialValue) {
//
//   let arr = this;
//
//   if (!initialValue){ // if it is not set run through this block
//     initialValue = arr[0]; //
//     arr = arr.slice(1);
//   }
//
//   let result = initialValue;
//
//   arr.myEach( element => result = callback(result,element));
//
//   return result;
// };

// ---------------------------------------------------------------------
