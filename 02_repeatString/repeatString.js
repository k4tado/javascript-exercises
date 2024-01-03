const repeatString = function (word, times) {
  let string = "";
  if (times >= 0) {
    for (i = 0; i < times; i++) {
      string += word;
    }
    return string;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
