
/*
    The forEach method loops over every item in an array, applys the inline callback function and returns undefined. 
    This callback function can be provided with up to 3 arguments. The function arguments get the following
    optional values: function(elementinArray, indexOfElement, array). Providing one just accesses the element,
    two will give access to the index etc. 
*/

var animals = ["Cats", "Dogs", "Elephants", "Pigs", "Goats"];

function removeLast(element, index, arr) {
    element = element.slice(0, -1)
    console.log(`Element ${element} at position ${index} lost his s!`)
}

console.log(`Original array: ${animals}`)
animals.forEach(removeLast)


