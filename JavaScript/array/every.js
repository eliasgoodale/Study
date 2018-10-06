/*
    The every method uses the provided callback to test if each value in an array passes the test of that function.
    It returns true for any condition put on an empty array. It will only return true if every value passes
*/

function isBigEnough(element, index, array) {
    return element >= 10;
  }


console.log([12, 5, 8, 130, 44].every(x => x >= 10)); //false
console.log([20, 30, 40, 50, 60].every(x => x >= 10)); //true