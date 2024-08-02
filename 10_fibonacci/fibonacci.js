const fibonacci = function (given) {

if (given < 0) {
    return "OOPS";
}

  x = 1;
  y = 1;

  if (given == 1 || given == 2) {
    return 1;
  } else if (given == 0) {
    return 0;
  }

  for (i = 2; i < given; i++) {
    z = x + y;
    placeholder = z;
    x = y;
    y = z;
  }

  return z;
};

// Do not edit below this line
module.exports = fibonacci;
