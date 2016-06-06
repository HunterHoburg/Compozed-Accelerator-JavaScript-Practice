var obj = require('./random');

var x = obj.randomNums(0, 10, 20);
var filtered = obj.onlyOdds(x);
console.log(x);
// console.log(filtered);
// var floatNum = 3.123e7;
// console.log(floatNum.toPrecision(8));

var sumx = obj.sum(x);

var powered = obj.squareOddsCubeEvens(x);

// var cubes = obj.multiMap(x, function(num) {
//   return Math.pow(num, 3);
// });
var cubes = obj.multiMap(x, function(num) {
  return Math.pow(num, 3);
});
console.log(cubes);
// console.log(powered);
// console.log(sumx);
