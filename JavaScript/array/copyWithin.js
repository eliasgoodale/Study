/*
    the copyWithin() method works like C++ and C memmove. Its first argument is the positon to copy data
    the second argument is the index where the copied data starts and the third is where the copied data ends
    the second argument's position is INCLUSIVE
*/

var array1 = [1, 2, 3, 4, 5];

// overwrite the first element with elements from index 1 til the end 
console.log(array1.copyWithin(0, 1));
// [2, 3, 4, 5, 5]