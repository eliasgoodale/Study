// There are 4 types of exports in Javascript

// Name Exports - Refer to importExample.js for imports

export const sqrt = Math.sqrt;

export function square(x) {
	return x * x;
}

export function vector_len(x, y) {
	return sqrt(square(x) + square(y))
}


