
// primitive types
var i = 3;
var f = 3.14;
var s = "hello" + " world";
var b = i < 5;
var n = null;
console.log(i, f, s, b, n);

// object types
var nums = [3, 5, 7];
nums.push(9);
var nine = nums.pop();

for(var i = 0; i < nums.length; i++){
  console.log('i:', i, 'i**i', i*i, 'pow:', Math.pow(i, 3));
}

var i = 0;
while(i < nums.length){
  console.log('while i:', i);
  i++;
}

nums.forEach(function(num, idx, arr) {
  console.log('num:', num, 'idx:', idx, 'arr:', arr);
});

for (var item in nums) {
  console.log('for in loop: ', item);
}

for (var v of nums) {
  console.log('for of i: ', v);
}

function sumFor(a) {
  var sum = 0;
  // for(var i = 0; i < a.length; i++) {
  //   sum += a[i];
  // }
  // return a.reduce(function(num1, num2) {
  //   return num1 + num2;
  // });

  // for (var num in a) {
  //   sum += a[num];
  // }
  for (var num of a) {
    sum += num;
  }
  return sum;
}

var x = sumFor(nums);

console.log(x);
