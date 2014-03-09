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
	var regEx = /[^a-zA-Z ]/g; 
	// Remove non-alpha characters.
	var cleanSentence = sentence.replace(regEx, "");
	// Extract the strings.
	var strArr = cleanSentence.split(" ");
	// Set longest string variable.
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

// Changes letter to subsequent letter in alphabet; capitalizes all vowels.
var letterChanges = function (string) {
	// Set a regex for only alpha characters.
	var alphaExp = /[a-zA-Z]/;
	// Set a regex for vowels.
	var vowelExp = /[aeiouAEIOU]/;
	// Create a new string.
	var newWord = "";
	for (var i = 0; i < string.length; i++) {
		// Get the next character if an alpha character, else leave it the same.
		var nextChar = alphaExp.test(string[i]) ? String.fromCharCode(string[i].charCodeAt(0) + 1) : string[i]; 
		// Capitalize next character and add to the word if vowel, otherwise just add to the word.
		vowelExp.test(nextChar) ? newWord += nextChar.toUpperCase() : newWord += nextChar; 
	}

	return newWord;
};

console.log(letterChanges("Bat!man!"));

// Capitalize the first letter of each word.

var letterCap = function (str) {
	// Set a regex to match the first letter of any word that is not already capitalized.
	var capRegEx = /\b[a-z]/g;
	// Test the regex
	console.log(str.match(capRegEx));
	// Use replace method and pass a function to handle convert the character to uppercase.
	capString = str.replace(capRegEx, function (match) {
		return match.toUpperCase(); 
	});


	return capString;

};

console.log(letterCap("cool story bro"));
console.log(letterCap("231sjjd in there @"));

var addArr = function (arr) {
	// First need to get the largest number in the array.
	var largest = Math.max.apply(null, arr);
	console.log(largest);
	// Now, need to figure out if any numbers in the array can add up to largest.

};

newArray = [1, 3, 4, 7, 8];
addArr(newArray);
