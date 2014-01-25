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

// Check two numbers and determine which is greater.
var checkNums = function (num1, num2) {
	// if num2 > num1, return "true", otherwise false.  if equal then return -1.
	if (num2 > num1) {
		return "true";
	}
	else if (num2 === num1) {
		return -1;
	}
	else {
		return "false";
	}

};

// Determine the longest word in a sentence.
var longWord = function (sentence) {
	// Set regex for only alpha characters.
	var regEx = /[^a-zA-Z ]/g 
	// Remove non-alpha characters.
	var cleanSentence = sentence.replace(regEx, "");
	// Extract the strings.
	var strArr = cleanSentence.split(" ");
	// Return the longest string.
	var bigString = "";
	for (var i = 0; i < strArr.length; i++) {
		// Set bigString to current string if current string > bigString.
		if (strArr[i].length > bigString.length) {
			bigString = strArr[i];
		}
	}

	return bigString;
};
console.log(longWord("The people arelslsls here??#"));









