function isEvenlyDivisible(a, b) {
	if (a % b === 0) {
		return true;
	}
	return false;
}

function halfSquare(num) {
	num = num ** 2 / 2;
	return num;
}

function isLong(string) {
	if (string.length >= 15) {
		return true;
	}
	return false;
}

function exclaim(title) {
	let newTitle = title;
	while (newTitle[newTitle.length - 1] === "!") {
		newTitle = newTitle.slice(0, -1);
	}
	return newTitle + "!";
}

function countWords(words) {
	let count = 1;
	for (let i = 0; i < words.length; i++) {
		if (words[i] === " ") {
			count++;
		}
	}
	return count;
}

function containsDigit(string) {
	let newString = [];
	newString = string.split("");
	if (string === "") {
		return false;
	}
	for (let i = 0; i < newString.length; i++) {
		if (!isNaN(parseInt(newString[i]))) {
			return true;
		}
	}
	return false;
}

function containsLowerCase(string) {
	let checker = false;
	const lowercase = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	let newString = [];
	newString = string.split("");

	for (i = 0; i < newString.length; i++) {
		if (lowercase[lowercase.indexOf(newString[i])] === newString[i]) {
			checker = true;
		}
	}
	return checker;
}

function containsUpperCase(string) {
	let checker = false;
	const uppercase = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];
	let newString = [];
	newString = string.split("");

	for (i = 0; i < newString.length; i++) {
		if (uppercase[uppercase.indexOf(newString[i])] === newString[i]) {
			checker = true;
		}
	}
	return checker;
}

function containsNonAlphanumeric(string) {
	let checker = false;
	let nonAlphanumeric = [
		".",
		",",
		"!",
		"/",
		"\\",
		"?",
		"<",
		">",
		"~",
		"`",
		"@",
		"#",
		"$",
		"%",
		"^",
		"&",
		"*",
		"(",
		")",
		"-",
		"_",
		"+",
		"=",
		"[",
		"]",
		"{",
		"}",
		":",
		";",
		"'",
		'"',
		" ",
	];
	let newString = [];
	newString = string.split("");

	for (i = 0; i < newString.length; i++) {
		if (
			nonAlphanumeric[nonAlphanumeric.indexOf(newString[i])] === newString[i]
		) {
			checker = true;
		}
	}
	return checker;
}

function containsSpace(string) {
	let checker = false;
	let newString = [];
	newString = string.split("");

	for (let i = 0; i < newString.length; i++) {
		if (isNaN(parseInt(newString[i])) && newString[i] === " ") {
			checker = true;
		}
	}
	return checker;
}

function digits(num) {
	const numArray = [];
	num = num.toString();
	let digits = num.split("");
	for (i = 0; i < digits.length; i++) {
		digits[i] = Number(digits[i]);
		numArray.push(digits[i]);
		if (isNaN(numArray[i])) {
			numArray.splice(i, 1);
		}
	}
	return numArray;
}

function truncate(string) {
	if (string.length <= 8) {
		return string;
	}
	return string.slice(0, 8) + "...";
}

function isValidPassword(string) {
	let hasUppercase = false;
	let hasLowercase = false;
	let hasNumber = false;
	let hasNonAlphaNumeric = false;
	let hasNoSpace = true;
	const nonAlphanumeric = [
		".",
		",",
		"!",
		"/",
		"\\",
		"?",
		"<",
		">",
		"~",
		"`",
		"@",
		"#",
		"$",
		"%",
		"^",
		"&",
		"*",
		"(",
		")",
		"-",
		"_",
		"+",
		"=",
		"[",
		"]",
		"{",
		"}",
		":",
		";",
		"'",
		'"',
	];
	const uppercase = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];
	const lowercase = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
	const newString = string.split("");
	for (i = 0; i < newString.length; i++) {
		if (nonAlphanumeric.includes(newString[i])) {
			hasNonAlphaNumeric = true;
		} else if (uppercase.includes(newString[i])) {
			hasUppercase = true;
		} else if (lowercase.includes(newString[i])) {
			hasLowercase = true;
		} else if (number.includes(newString[i])) {
			hasNumber = true;
		} else if (newString[i] === " ") {
			hasNoSpace = false;
		} else {
			return false;
		}
	}
	return (
		hasLowercase &&
		hasUppercase &&
		hasNonAlphaNumeric &&
		hasNumber &&
		hasNoSpace
	);
}

function onlyPunchy(titlesArray) {
	const result = [];
	for (let i = 0; i < titlesArray.length; i++) {
		const currentTitle = titlesArray[i];
		const withoutExTitle = currentTitle.split("!")[0];
		if (withoutExTitle.length < 15) {
			result.push(withoutExTitle + "!");
		}
	}
	return result;
}

module.exports = {
	isEvenlyDivisible,
	halfSquare,
	exclaim,
	isLong,
	containsDigit,
	containsLowerCase,
	containsUpperCase,
	containsNonAlphanumeric,
	containsSpace,
	countWords,
	digits,
	truncate,
	isValidPassword,
	onlyPunchy,
};
