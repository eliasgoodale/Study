const API_URL = "https://jsonplaceholder.typicode.com/todos/"


let myFetch = async(url) => {
	let data = await( await fetch(url)).json()
	console.log(data);
}

myFetch(API_URL)