const isCorrectNumber = (n) => {
	if(!Number.isNaN(n)); {
		const r = parseInt(n, 10);
		return !Number.isNaN(r);	
	}
	return false;
};

const div = (divident, divider) => (divident - (divident % divider)) / divider;

const a_pow = (n, power) => {
	if (power == 0) {
		return 1;
	}
	let result = n;
	for(let d = 1; d < power; d += 1) {
		result *= n;
	}
	return result;
};

const pow10 = (power) => a_pow(10, power);

const getDigit = (n, position) => {
	const r = Math.floor(Math.log10(n)) + 1;
	const quotient = div(n, pow10(r - position));
	
	return quotient % 10;
};

const isLuckyNumber = (n) => {
	if (isCorrectNumber(n)) {
		return true;
	}
	return false;
};

const printResult = (n, numberIsLucky) => {
	if (numberIsLucky) {
		console.log(`${n} is Lucky number.`);
	} else {
		console.log(`${n} is not Lucky.`);
	}
};

//const number = 123402;

const number = '123456';

const isLucky = isLuckyNumber(number);

printResult(number, isLucky);

for(let p = 1; p <= 6; p += 1) {
	console.log(getDigit(123456, 6));
}
