const palindromes = function (prompt) {
    let string = prompt.toLowerCase().split("`").reverse().join('')
    let newString = prompt.toLowerCase().split("`").join('');

    if ( string === newString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;


/*
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let prompt = "racecar"

let string = prompt.toLowerCase().split("`").reverse().join('')

let newString = prompt.toLowerCase().split("`").join('');

console.log(string);
console.log(newString);
console.log(prompt);
console.log(newString == prompt);
*/