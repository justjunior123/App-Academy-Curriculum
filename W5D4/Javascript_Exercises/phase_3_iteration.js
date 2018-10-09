//  Phase 3: Iteration

// Let's do a few slightly more involved problems with arrays. These should
//  be pretty familiar.

// Array#bubbleSort - receives an array, returns a sorted array by implementing
// bubble sort sorting algorithm.

// Array.prototype.bubbleSort = function (array) {
//   let result = this;
//   let sorted = true;
//
//   while (sorted) {
//     sorted = false;
//
//     for (var i = 0; i < result.length - 1; i++) {
//       if (result[i] > result[i + 1]) {
//         [result[i],result[i+1]] = [result[i+1],result[i]];
//         sorted = true;
//       }
//     }
//   }
//   return result;
// };

// String#substrings - receives a string, returns an array of all substrings

String.prototype.substrings = function () {
  let stringArray = [];

  for (var start = 0; start < this.length; start++) {
    console.log(start);
    for (var end = start + 1; end <= this.length; end++) {
      stringArray.push(this.slice(start,end));
    }
  }

  return stringArray;
};
