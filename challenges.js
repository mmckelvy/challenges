// Calculate the factorial of a number.
var factorial = function (number) {
	var factorsArr = [];
	// Get all the factors.
	for (var i = number; i > 1; i--) {
		factorsArr.push(i);
	}
	// Multiply the factors
	var value = factorsArr.reduce(function (a, b) {
		return a * b;
	});

	return value;
};

console.log(factorial(4));
console.log(factorial(8));

// Sort characters of a string alphabetically.
var alphaSort = function (str) {
	var outputArr = [];
	// Create a compare function for the subsequent sort.
	var compareFunc = function (a, b) {
		if (a < b) {
			return -1;
		}
		else if (b < a) {
			return 1;
		}
		else {
			return 0;
		}
	};
	// Push characters to output array.
	for (var i = 0; i < str.length; i++) {
		outputArr.push(str.charAt(i));
	}
	// Sort the array.
	outputArr.sort(compareFunc);
	var sorted = outputArr.join("");

	return sorted;
};

var testString = "stuf";
console.log(alphaSort(testString));