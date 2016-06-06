'use strict';

function random(min, max) {
  return Math.round(Math.random() * (max-min) + min);
}

function randomNums(min, max, count) {
  var result = [];
  for(var i = 0; i < count; i++) {
    result.push(random(min, max));
  }
  return result;
}

function onlyOdds(nums) {
  return nums.filter(function(value) {
    return value % 2;
  });
}

function squareOddsCubeEvens(nums) {
  return nums.map(function(value) {
    return value % 2 ? Math.pow(value, 2) : Math.pow(value, 3);
  });
}

function sum(nums) {
  return nums.reduce(function(acc, cur) {
    return acc + cur;
  });
}

function multiMap(nums, fn) {
  return nums.map(fn);
}

module.exports = {
  random: random,
  randomNums: randomNums,
  onlyOdds: onlyOdds,
  squareOddsCubeEvens: squareOddsCubeEvens,
  sum: sum,
  multiMap: multiMap
};
