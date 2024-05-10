const sumAll = function(i, j) {

    if (!Number.isInteger(i) || !Number.isInteger(j)) {
        return 'ERROR';
    } else if (i < 0 || j < 0) {
        return 'ERROR';
    }

    let sum = 0;
    let start = Math.min(i, j);
    let end = Math.max(i, j)

    while (start <= end) {
        sum += start;
        start++;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
