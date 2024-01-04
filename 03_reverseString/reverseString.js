const reverseString = function (input) {
  /*let newArray = [];
  let a = 0;

  for (let i = input.length - 1; i >= 0; i--) {
    console.log(input[i]);
    newArray[a] = input[i];
    a++;
  }
  return newArray.join("");*/
  
  console.log(input.split("").reverse().join(""));
  return input.split("").reverse().join("");
  
};

// Do not edit below this line
module.exports = reverseString;
