/*
	Example of return values of request and response objects
*/

var myGithubUrl = 'https://api.github.com/users/eliasgoodale'
var Request = require('request')

function getRequest() {
	var options = {
		url: myGithubUrl,
		headers: {
			'User-Agent': 'request',
		},
	}
	return request.get(options, (err, response, body) => {
		if(err)
			console.log(err)
		else
			res
	})
}

//getRequest().then(req => console.log(req));

var r = new Request(myGithubUrl)

fetch(r).then(res => res.json()).then(data => console.log(data))

console.log(
`	myRequest { 
		url: ${r.url},\n
		method: ${r.method}
		credentials: ${r.credentials}
		data: ${r.data}`)