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

