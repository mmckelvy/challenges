// Helper functions
String.prototype.repeat = function (num) {
    return new Array ( num + 1 ).join(this);
};


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

// Find the largest item in an array.  Then determine if any combination of other elements in the array add up to the largest number.
var addArr = function (arr) {
	// First need to get the largest number in the array.
	var largest = Math.max.apply(null, arr);
	// Get index of the largest value.
	var largestIndex = arr.indexOf(largest);
	// Remove the largest number from the array.
	arr.splice(largestIndex, 1);
	// Calculate the number of subsets in the array (the power set).
	var powerSet = [];
	var powerSetLength = Math.pow(2, arr.length);
	var binArr = [];
	// Get number of placeholders necessary to properly map the binary digits.
	var totalDigits = arr.length;

	// Set up a loop that counts from 1 to powerSet (2^n)
	for (var i = 0; i < powerSetLength; i++) {
		// Convert the count to binary
		var count = i.toString(2);
		// Get the number of leading zeros necessary (total necessary - total digits in count).
		var leading = totalDigits - count.length;
		// Create the necessary leading zeros.
		var zeros = "0".repeat(leading);
		// Add them to the count.
		var binMap = zeros + count;
		// console.log(binMap);
		// Create an array to hold the subset of the power set according to the binMap.
		var subSet = [];
		for (var j = 0; len = binMap.length, j < len; j++) {
			// console.log(binMap[j]);
			if (binMap[j] === "1") {
				subSet.push(arr[j]);	
			}
		}		
		// Push to an array for mapping.
		powerSet.push(subSet);
	}
	// Calculate all the sums for each subset.
	for (var k = 0; k < powerSet.length; k++) {
		if (powerSet[k].length === 0) {
			powerSet[k] = 0;
		}

		else {
			powerSet[k] = powerSet[k].reduce (function (a, b) {
				return a + b;
			});
		}
	}

	// Check to see if largest number is in the array.
	if (powerSet.indexOf(largest) === -1) {
		return false;
	}

	else {
		return true;
	}
};



var testerString = "a";
trueArray = [1, 2, 3];
falseArray = [2, 3, 4];

// Should return true.
console.log(addArr(trueArray));

// Should return false.
console.log(addArr(falseArray));