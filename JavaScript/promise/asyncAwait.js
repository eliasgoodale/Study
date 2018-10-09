/*
	Async functions are non-blocking functions that return a promise. If the function throws an error the promise is rejected, if the function
	returns a value the promise will be resolved. The await expression pauses the async function and waits for the promise to resolve
	before moving forward. First, is an example of a function that doubles the value it is passes and returns it after two seconds.
	Next, we show how the values are not resolved whilst trying to immediately the sum of 3 of them. Chaining together .then statements we see
	how a non-async function can add their values in order. 
*/

function doubleAfter2Seconds(x) {
	return new Promise(res => {
		setTimeout(() => {
			res(x * 2);
		}, 2000)
	})
}

doubleAfter2Seconds(10).then((result) => {
	console.log(result);
});

let sum = doubleAfter2Seconds(10) + doubleAfter2Seconds(20) + doubleAfter2Seconds(30)
console.log(sum);  //returns 3 promise objects because the promises have not resolved

function addPromises (x) {
	return new Promise(res => {
		doubleAfter2Seconds(10).then((a) => {		//after two seconds, the value 20 is returned to a
			doubleAfter2Seconds(20).then((b) => { //after another two seconds the value 40 is returned to b
				doubleAfter2Seconds(30).then((c) => { //finally after 6 seconds the value 60 is returned to c
					res(x + a + b + c); //immediately after c is returned the resolve method returns the final value
				})
			})
		})
	})
}

addPromises(10).then(sum => console.log(sum)); //returns 10 + 20 + 40 + 60 after ~ 6 seconds

async function addAsync(x) {
	const a = await doubleAfter2Seconds(10)
	const b = await doubleAfter2Seconds(20)
	const c = await doubleAfter2Seconds(30)
	return x + a + b + c
}

addAsync(10).then(sum => console.log(sum));