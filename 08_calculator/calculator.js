const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  let sum = 0;
	for ( let i = 0; i < array.length; i++ ) {
    sum += parseInt(array[i]);
  }
  return sum;
};

const multiply = function(array) {
  let product = array[0];
	for ( let i = 1; i < array.length; i++ ) {
    product *= parseInt(array[i]);
  }
  return product;
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
