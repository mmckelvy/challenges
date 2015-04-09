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

// Capitalize the first letter of each word.

var letterCap = function (str) {
	// Set a regex to match the first letter of any word that is not already capitalized.
	var capRegEx = /\b[a-z]/g;
	// Test the regex
	// Use replace method and pass a function to handle convert the character to uppercase.
	capString = str.replace(capRegEx, function (match) {
		return match.toUpperCase(); 
	});


	return capString;

};

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

/* Determine if mode equals the mean; return 1 if true, 0 if false */

// Find mode of the array

var mode = function (arr) {
	// Loop through array, create a new key if the number does not exist, else push the number to an array in for the key that matches the number.
	var modeObj = {};

	for (var i = 0, len = arr.length; i < len; i++) {
		// Create a new key for each number if the key does not exist.
		if ( !(arr[i] in modeObj) ) {
			modeObj[arr[i]] = []; // Instantiate an array.
			modeObj[arr[i]].push(arr[i]); // Push the current number to the array.
		}

		// Else push items to the proper array.
		else {
			modeObj[arr[i]].push(arr[i]);
		}
	}

	// Count number of items in each key.
	var modeResult = 0;
	for (var key in modeObj) {
		if (modeObj[key].length > modeResult) {
			modeResult = +key;
		}

	}

	return modeResult;
};

/* Calculate the mean of the array */

var average = function (arr) {
	// Sum all items in the array.
	var sum = arr.reduce(function (a, b) {
		return a + b;
	});

	var count = arr.length;
	return sum / count;
};

/* Check to see if mean equals mode */

var meanMode = function (arr) {
	var modeCalc = mode(arr);
	var meanCalc = average(arr);
	var result = meanCalc === modeCalc ? 1 : 0;

	return result;
};

/* Vowel count */
var vowelCounter = function (str) {
	 // Create an object to hold vowel keys.
	var vowelObj = {
		a: 0,
		e: 0,
		i: 0,
		o: 0,
		u: 0
	};

	var vowelCount = 0;

	for (var i = 0, len = str.length; i < len; i++) {
		if (str[i] in vowelObj) {
			vowelCount++;
		}
	}
	return vowelCount;

};

/* Determine if an array is an arithmetic or geometric sequence. */

var arithGeo = function (array) {

	var sum = array.reduce(function (a, b) { return a + b }); // Get sum of the array.
	/* Get the arithmetic sum of the array. */
	var nTerms = array.length;
	var firstTerm = array[0];
	var lastTerm = array[array.length - 1];
	var arithSum = nTerms * (firstTerm + lastTerm) / 2;

	/* Exit the function and return arithmetic if series is arithmetic. */
	if (sum === arithSum) {
		return 'Arithmetic';
	}

	/* Check for geometric sequence. */
	for (var i = 0, len = array.length - 1; i < len; i++) {
		var ratio = array[1] / array[0]; // Get the ratio.
		if ( array[i + 1] / array[i] !== ratio) {
			return -1;
		}
	}

	return 'Geometric';
};


var geoArrayTest = [2, 4, 8, 16, 32];
var arithArrayTest = [2, 4, 6, 8, 10];
var negArrayTest = [1, 7, 8, 3, 2];

/* numberSearch function */

// First, find all the numbers in a given string.
var getNumbers = function (string) {
	var numRegex = /[0-9]+/g // Need a regex to get all the numbers.
	var numArray = string.match(numRegex);

	var sum = numArray.reduce( function (a, b) {
		return +a + +b; // Coerce to numbers.
	});

	return sum;
};

var testString = 'T1wo Ho33uses';

var regexTesting = function(string) {
	var jadeRegex = /\bjade\b/;
	
	return jadeRegex.test(string);
};


function letterCount(string) {
	var stringObjArray = []; // Create an array to hold the string objects.
	
	/* Create an array of the words. */
	var wordRegex = /\b\w+\b/g;
	var wordsArray = string.match(wordRegex);

	/* Check each word in the array create object attrs for sorting. /*/
	for (var i = 0, len = wordsArray.length; i < len; i++) {
		var stringObj = {}; // Create an object to hold the sorting key / vals.
		var repeatsArray = letterRepeat(wordsArray[i]);
		
		stringObj.index = i;
		stringObj.word = wordsArray[i];

		var repeats = letterRepeat(stringObj.word);
		stringObj.repeatCount = Math.max.apply(null, repeats);

		stringObjArray.push(stringObj);
	}

	/* Sort by repeat count, then index. */
	stringObjArray.sort( function (a, b) {
		return b.repeatCount - a.repeatCount || a.index - b.index;
	});

	return stringObjArray[0].repeatCount === 1 ? -1 : stringObjArray[0].word;

};

function letterRepeat(string) {
	var repeatArray = [];
	
	for (var i = 0; i < string.length; i++) {
		var regEx = new RegExp(string[i], 'g');
		repeatArray.push( string.match(regEx).length );
	}

	return repeatArray;
};


// Ensure that a given string is enclosed by '+' symbols.
function simpleSymbols(string) {
	var alphaRegEx = /[a-zA-Z]/;
	
	for (var i = 0; i < string.length; i++) {
		
		// If alpha character, get preceding character, test to see if it is "+".
		if ( alphaRegEx.test(string[i]) ) {
			
			var precedingChar = string.charAt( i - 1 );
			var followingChar = string.charAt( i + 1 );

			if ( precedingChar !== "+" || followingChar !== "+" ) {
				return false;
			}
		
		}
	}	

	return true;
};

// Palindrome.
function palindromer (string) {
	// Remove punctuation and spaces.
	var regEx = /[^\w]/g;
	var regString = string.replace(regEx, '');
	var cleanString = regString.toLowerCase();

	// Push strings to an array.
	var forward = [];
	
	for (var i = 0; i < cleanString.length; i++) {
		forward.push(cleanString[i]);
	}

	var backward = Array.prototype.slice.call(forward);
	backward.reverse();

	// Check if strings are equal.
	for (var j = 0; j < forward.length; j++) {
		if ( forward[j] !== backward[j] ) {
			return false;
		}
	}

	return true;

};

function powerTwo (number) {
	var base = 2;
	var exponent = 1;
	var powerValue = 0;

	while ( Math.pow(base, exponent) <= number) {
		if (Math.pow(base, exponent) === number) {
			return true
		}

		exponent++
	}

	return false;

};


// Filter function for Skoop.
function filterUniq (autoshipArray) {
	
	for (var i = 0; i < autoshipArray.length; i++) {
		
		for (var j = i; j < autoshipArray.length; j++) {
			
			if (autoshipArray[i].sku === autoshipArray[j].sku) {
				
				var quantity = +autoshipArray[i].quantity;
				quantity += +autoshipArray[j].quantity;
				autoshipArray[i] = quantity;
				autoshipArray.splice(j, 1);
			
			}
		} // Inner loop.
	} // Outer loop.

	return autoshipArray;
};


function wordCount(str) {
	var regEx = /\s/g;
	var count = str.match(regEx) ? str.match(regEx).length + 1 : 1;

	return count;
};


function reTest(str) {
	var newReg = /([^\s]+)/;
	console.log('The match', str.match(newReg));
};


// Recursive palindrome.
function palindrome(str) {
	if (!str.length) {
		return console.log('Please enter a string');
	} 
	// This is a base condition.
	if (str.length === 1) {
		return true;
	}

	var head = str[0];
	var tail = str[str.length - 1];
	
	// This is a base condition.
	if (head !== tail) {
		return false;
	}
	
	var sliced = str.length > 2 ? str.slice(1, str.length - 1) : str.slice(1);

	// Recursive call
	return palindrome(sliced);

};

function simpleAdd(num) {
	// Could just use a for loop and a simple counter.
	// More elegant way to do it?
	
	// Is the sum of any number from 1 to N knowable via some sort of number property algorithm?
	// Sum = avg x number of terms.
	// Number of terms = N / interval
	// e.g. 1 - 6 = 1, 2, 3, 4, 5, 6
	// Or, End - starting + 1 / interval
	// So, number of terms in this case would be N.
	// What about the avg?
	// If you have 1, 2, 3, avg = 2.
	// If you have 1, 2, 3, 4, avg = 10 / 4 = 2.5 or avg of 2, 3.
	// So avg could also be end - beg / 2.
	// so avg = N + 1 / 2
	var terms = num; // Assume interval will always be the same.
	var avg = (1 + num) / 2;
	return terms * avg;	

};

function fact(n) {
	if (n === 2) {
		return 2
	}

	return n * fact(n - 1);
};

function reverseStr(str) {
	// First method...could push all characters to an array and then join the array.
	var reversed = '';
	for (var i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
	}

	return reversed;
};

function adder(num) {
	var result = 0;

	for (var i = 1; i <= num; i++) {
		result += i;
	}
	return result;
};


function persist(num) {
	// Create a cache for number of times function has been called if cache does not exist.
	if (!persist.times) {
		persist.times = {};
		persist.times.value = 0;
	}
	
	// Update the cache.
	persist.times.value++;
	
	// Convert the number to a string and then to an array.
	var stringified = num.toString().split('');

	// Reduce over the array.
	var result = stringified.reduce(function (prev, current) {
		return +prev + +current;
	});

	if (result < 10) {
		// Read the cache.
		var times = persist.times.value;
		// Clear the cache.
		delete persist.times;
		return times;
	}
	
	return persist(result);	

};

function exOh(str) {
	// Need to count the number of xs.
	// Need to count the number of os.
	var x = 0;
	var o = 0;

	for (var i = 0; i < str.length; i++) {
		str[i] === 'x' ? x++ : o++;
	}

	return x === o ? true : false;
};


function meanMode(arr) {
	// Get the mean.
	var mean = arr.reduce(function (prev, current) {
		return prev + current;
	}) / arr.length;

	// Prob easiest to just store all the counts on an object and then find the max.
	var modeMap = arr.reduce(function (countMap, num) {
		// If the key is non-falsey, then increment the key with the relevant number.  Else, initialize to 1.
		countMap[word] = countMap[word]++ || 1;
		return countMap;
	}, {}); // Initialize an empty object as the initial value.

	// Loop through object to find the max.
	var count = 0;
	var mode = 0;
	for (var key in modeMap) {
		if (modeMap[key] > count) {
			count = modeMap[key];
			mode = key;
		}
	}

	return mean === mode ? 1 : 0;

};

function secondGreatLow(arr) {
	// Find the max and min of the array.
	var max = Math.max.apply(null, arr);
	var min = Math.min.apply(null, arr);

	var secondGreat = min;
	var secondLow  = max;
	
	// Conditional:
	// If arr[i] < max but greater than secondGreat, then replace the value.  Converse for secondLow.
	for (var i = 0; i < arr.length; i++) {
		// Update the secondGreat variable.
		if (arr[i] >= secondGreat && arr[i] < max) {
			secondGreat = arr[i];
		}

		if (arr[i] <= secondLow && arr[i] > min) {
			secondLow = arr[i];
		}
	}

	return '' + secondLow + " " + secondGreat;

};

function multPer(num) {
	// Check if number is already a single digit.
	if (num < 10) {
		return 0;
	}

	// Create the cache if it doesn't exist.
	if (!multPer.times) {
		multPer.times = {};
		multPer.times.value = 0; // Initialize cache to zero.
	}

	// Increment the cache with each function call.
	multPer.times.value++;

	// Stringify the number.
	var stringified = num.toString().split('');

	// Reduce the array.
	var result = stringified.reduce(function (prev, current) {
		return +prev * +current;
	});

	// Call the function again with the result.
	if (result < 10) {
		// Read the cache.
		var times = multPer.times.value;
		// Clear the cache.
		delete multPer.times;
		return times; // Return the result.
	}

	// Recursive case.
	return multPer(result);

};

function morePalin(str) {
	// Basic pseudocode:
	// If the string is one character then it is by definition a palindrome. (base case).
	// Call the function again for each string...gradually slicing it from the outside in each time.
	if (!str.length) {
		return console.log('Please enter a string');
	}

	// Single length string always returns true.
	if (str.length < 2) {
		return true;
	}

	// Remove punctuation.
	var re = /[^a-zA-Z]/g;
	var clean = str.replace(re, '').toLowerCase();

	// Check if first and last characters are the same.
	var head = clean[0];
	var tail = clean[clean.length - 1];

	// Base condition.
	if (head !== tail) {
		return false;
	}

	if (clean.length === 2) {
		return true;
	}

	var sliced = clean.slice(1, clean.length - 1);

	return morePalin(sliced);
};	

function runLength(str) {
	// Initialize object to hold string chars.
	var chars = {};
	var re;
	// Loop through string characters.  If new char, then create a new key val pair and initialize to 1.  If char exists, increment the value for that char.
	for (var i = 0; i < str.length; i++) {
		if (!chars[str[i]]) {
			chars[str[i]] = 1;
		}
		else {
			chars[str[i]]++;
		}
	}

	// Create a new string with the key / val pairs.
	var newStr = '';
	for (var key in chars) {
		newStr += chars[key].toString() + key;
	}

	return newStr;

};

function stringScramble(baseStr, word) {
	var baseArr = baseStr.split('');
	var wordArr = word.split('');
	var spliceIndex = 0;
	var called = 0;

	// For each character in the word array, check the base array to see if it exists there.
	var result = wordArr.every(function (wordChar, wordIndex) {
		if (called > 0) {
			baseArr.splice(spliceIndex, 1);
		}
		return baseArr.some(function (baseChar, baseIndex) {
			spliceIndex = baseIndex;
			called++;
			return wordChar.toLowerCase() === baseChar.toLowerCase();
		});
	});

	return result;

};

// Find prime factorization of a number.
// Returns a hash with prime factors as keys, and exponents for prime factors as the values.
function primeFactor(num) {
	// Create the cache.
	var primes = {};
	var divisor = 2; // Initialize the divisor to 2 (first prime number).
	while (divisor <= num) {

	} 
}

// Use Euclidean algorithm.
function gcf(num1, num2) {
	
	var dividend = Math.max(num1, num2);
	var divisor = Math.min(num1, num2);
	var remainder = dividend % divisor;

	if (remainder === 0) {
		return divisor;
	}

	return gcf(divisor, remainder);
};
		
function consecutive (arr) {
	// Set a variable to track number of additional integers necessary.
	var integers = 0;

	// Sort the array from smallest to largest.
	arr.sort(function (a, b) {
		return a - b;
	});

	// Determine difference between each number.
	for (var i = 0; i < arr.length - 1; i++) {
		integers = integers + (arr[i + 1] - arr[i] - 1);
	}

	return integers;
};

function binaryConverter(str) {
	
	// Reverse the string.
	var reversed = str.split('').reverse().join('');
	var arr = [];
	var power = 0;
	
	// For each character, get the value and multiply by 2.
	// Push the result into an array.
	for (var i = 0; i < reversed.length; i++) {
		var col = Math.pow(2, power) * reversed[i];
		arr.push(col);
		power++;
	}
	var result = arr.reduce(function (prev, current) {
		return prev + current;
	});

	return result;
};

function numberSearch(str) {
	// Sum the numbers.
	// Count the number of letters.
	// Divide the sum by the number of letters.
	// Round the result.

	// Could use a regex.
	// Another way?  Nope.

	var numRe = /\d/g;
	var alphaRe = /[a-zA-Z]/g;

	var numSum = str.match(numRe).reduce(function (prev, current) {
		return +prev + +current;
	});

	var letterCount = str.match(alphaRe).length;
	var quotient = numSum / letterCount;

	var result = Math.round(quotient);

	return result;
};

function coinCounter(num) {
	var subtrahends = [11, 9, 7, 5, 1];
	var remaining = num; // Start the calculation at the given number.
	var i = 0; // Iterator.

	while (remaining > 0) {
		remaining = remaining - subtrahends[i];
	}

};

function dashInsert(str) {
	var arr = [];
	// if the char is odd, add the dash.
	for (var i = 0; i < str.length; i++) {
		if (i === str.length - 1) {
			arr.push(str[i]);
		}

		else if (+str[i] % 2 !== 0 && +str[i + 1] % 2 !== 0) {
			arr.push(str[i]);
			arr.push('-');
		}

		else {
			arr.push(str[i]);
		}
	}
	return arr.join('');
};

function abCheck(str) {
	var re = /a(?=...b)/g;
	return re.test(str);
};

function pali(str) {
	return str.split('').reverse().join('') === str ? true : false;
};

// This is a repeated pattern...counting things and then comparing the results...
function letterCount(str) {
	// Split the string to an array.
	var words = str.split(' ');
	// Sort the array.
	words.sort();
	// Each word is going to have a corresonding hash.
	// Each hash will be stored in an array.
	var allCounts = [];
	var globalMax = 0;
	var longest = '';
	for (var i = 0; i < words.length; i++) {
		// Convert the each string in words to an array.
		var letters = words[i].split('');
		var letterCount = letters.reduce(function (countMap, letter) {
			// If current item (e.g. 'g') is already a key...
			letter in countMap ? countMap[letter]++ : countMap[letter] = 1;
			return countMap;
		}, {});
		allCounts.push(letterCount);
		// Cool way to get the max of a hashmap.
		var localMax = Object.keys(allCounts[i]).reduce(function (prev, current) {
			return allCounts[i][current] > prev ? allCounts[i][current] : prev;
		}, 0);
		
		if (localMax > globalMax) {
			longest = words[i];
			globalMax = localMax;
		}
	}
		
	return longest;
};

console.log(letterCount('the dog and cat'));