// Array#uniq - returns a new array containing only the unique elements of the original array
// the unique elements should be in the order in which they first appear
// should not mutate the original array

// Array.prototype.uniq = function () {
//   let uniqArray = [];

// the indexOf() function is comparing the presence of a value. if the value
// does not exist within the arguement then a -1 will be returned.

//   for (var i = 0; i < this.length; i++) {
//     if (uniqArray.indexOf( this[i] ) === -1 ) {
//       uniqArray.push(this[i]);
//     }
//   }
//
//   return uniqArray;
// };
//
// var array = [1,1,2,2,3,3,4,4,5];
// array.uniq();
// ---------------------------------------------------------------------
// Array#twoSum - returns an array of position pairs where the elements sum to zero

// Array.prototype.twoSum = function () {
//   let array = [];
//
//   for (var i = 0; i < this.length - 1; i++) {
//     if (this[i] + this[i + 1] === 0) {
//       array.push(i,i + 1);
//     }
//   }
//
//   return array;
// };
// ---------------------------------------------------------------------

// Array#transpose - where we have a two-dimensional array representing a
// matrix. returns the transpose should not mutate the original array


// Array.prototype.transpose = function () {
//   var row = this.length;
//   var col = this[0].length;
//   let transposedArray = [];
//   console.log(`${row} is the length of the rows`);
//   console.log(`${col} is the length of the columns`);
//
//   for (var x = 0; x < row; x++) {
//     transposedArray[x] = [];
//     console.log(`Current value of x:${x}`);
//
//     for (var y = 0; y < col; y++) {
//       console.log(`Current value of y:${y}`);
//       console.log(`This Array ${this[x][y]}`);
//       transposedArray[x][y] = this[y][x];
//     }
//   }
//
//   console.log(transposedArray);
// };

// var array = [[1,2,3],[4,5,6],[7,8,9]];
// array.transpose();
