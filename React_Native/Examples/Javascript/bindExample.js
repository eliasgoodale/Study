// The bind method creates a function with its this keyword set to the provided value

var module = {
	x: 42,
	getX: function() {
		return this.x;
	},
}

var unboundGetX = module.getX;
console.log(unboundGetX());

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());