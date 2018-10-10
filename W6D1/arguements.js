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

// bind with args

// Rewrite your myBind method so that it can take both bind-time arguments
// and call-time arguments.

Function.prototype.myBind1 = function (ctx) {
  const fn = this;
  const bindArgs = Array.from(arguments).slice(1);
  return function _boundFn() {
    const callArgs = Array.from(arguments);
    return fn.apply(ctx, bindArgs.concat(callArgs));
  };
};


function curriedSum(numArgs) {
  const numbers = [];

  function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      let total = 0;

      numbers.forEach((n) => { total += n; });

      return total;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}
