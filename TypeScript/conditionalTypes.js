/*
    With the Omit type you are able to create a new type without some of the original keys.
    The keys passed in must be in Task to use it, using a key that is not within task
    will result in an error.
*/
var myObj = {
    id: "1234",
    name: "billy",
    contacts: []
};
var retTask = function () { return myObj; };
var newObj = retTask();
console.log(newObj);
var myTask1 = {
    id: "184302",
    name: "hello"
};
var myTask2 = {
    id: "101010",
    contacts: []
};
