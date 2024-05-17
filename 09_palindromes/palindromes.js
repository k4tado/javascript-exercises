const palindromes = function (prompt) {

let string = prompt.toLowerCase();
string = string.split("");
string = string.filter(char => /[a-z0-9]/.test(char));
string = string.reverse();
string = string.join('');

let string2 = prompt.toLowerCase();
string2 = string2.split("");
string2 = string2.filter(char => /[a-z0-9]/.test(char));
string2 = string2.join('');

    if ( string === string2) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

/*
const palindromes = function (prompt) {
    let string = prompt.toLowerCase().split("").reverse().join('')
    let newString = prompt.toLowerCase().split("").join('');

    if ( string === newString) {
        return true;
    } else {
        return false;
    }
};
*/