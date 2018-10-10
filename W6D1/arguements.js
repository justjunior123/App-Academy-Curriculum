// Write a sum function that takes any number of arguments:

  // sum(1, 2, 3, 4) === 10
  // sum(1, 2, 3, 4, 5) === 15

// Solve it first using the arguments keyword, then rewrite your solution
// to use the ... rest operator.

// function sum1() {
//   let result = 0;
//
//
//   for (let i = 0; i < arguments.length; i++) {
//
//     result += arguments[i];
//   }
//
//   console.log(result);
// }

// Using rest arguments

function sum2(...someArgs) {
  let result = 0;

  for (var i = 0; i < someArgs.length; i++) {
    result += someArgs[i];
  }
  // return result;
  console.log(result);
}

sum2(1,2,3,4,5);
