const API_URL: string = "https://jsonplaceholder.typicode.com/todos/";

let myFetch: Function = async (url: string) => {
	let response: any = await fetch(url);
	var data: any = await response.json();
	console.log(data);
};

myFetch(API_URL);