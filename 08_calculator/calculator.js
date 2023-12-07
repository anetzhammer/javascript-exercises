const add = function (x, y) {
  return (x + y)
};

const subtract = function (x, y) {
  return (x - y)
};

const sum = function (x) {
  let total = 0
  for (let i of x) {
    total = total + i
  }
    return total
};


const multiply = function (x) {
  let total = 1
  for (let i of x) {
    total = total * i
  }
    return total
};

const power = function (x,y) {
  return x**y
};

const factorial = function (x) {
  if (x === 0) { 
    return 1
  }
  for (let i = (x-1); i>0; i--){
    x = x*i
  }
  return x 
};
factorial(0)
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
