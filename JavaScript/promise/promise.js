/*
	Creating a new promise can be done using the new constructor. Any promise that performs an asynchronous operation
	must call one of two methods, resolve or reject. If the operation is successful, the data is passes to the code that
	uses that promise. else an error is passed. Access to data before the promise has resolved or rejected will return a promise
	in a pending state.
*/
var request = require ('request')

console.log(request)
var userDetails;

function initialize() {
	var options = {
		url: 'https://api.github.com/users/eliasgoodale',
		headers: {
			'User-Agent': 'request'
		}
	}
	return new Promise(function(res, rej) {
		request.get(options, function(err, resp, body) {
			if(err) {
				rej(err);
			} else {
				res(JSON.parse(body))
			}
		})
	})
}

// initialize().then(data => console.log(data)) //Returns Data and logs it to the console

function main () {
	var initializePromise = initialize();
	initializePromise.then((res) => {
		userDetails = res;
		console.log(userDetails)
	}, (err) => {
		console.log(err)
	})
}

main()