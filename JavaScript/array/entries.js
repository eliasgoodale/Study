/* 
    The .entries() method returns a new Array Iterator object that contains the key/value pairs for each index.
    The next method can be called to iterate forward
*/

var myArr = ['a', 'b', 'c'];

var iter = myArr.entries();

for (let e of iter) {
    console.log(e);
} 
