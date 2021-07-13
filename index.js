function zero(para) { return addToArray(para, 0); }
function one(para) { return addToArray(para, 1); }
function two(para) { return addToArray(para, 2); }
function three(para) { return addToArray(para, 3); }
function four(para) { return addToArray(para, 4); }
function five(para) { return addToArray(para, 5); }
function six(para) { return addToArray(para, 6); }
function seven(para) { return addToArray(para, 7); }
function eight(para) { return addToArray(para, 8); }
function nine(para) { return addToArray(para, 9); }

function plus(para) { return addToArray(para, '+'); }
function minus(para) { return addToArray(para, '-'); }
function times(para) { return addToArray(para, '*'); }
function dividedBy(para) { return addToArray(para, '/'); }

function addToArray(para, value) {
	let arr = [];

	if (Array.isArray(para)) {
		para.push(value);
		arr = para;
	} else {
		arr.push(value);
	}

	return arr.length === 3 ? calculation(arr) : arr;
}

function calculation(para) {
	let value = 0;

	switch (para[1]) {
		case '+':
			value = Math.floor(para[2] + para[0]);
			break;
		case '-':
			value = Math.floor(para[2] - para[0]);
			break;
		case '*':
			value = Math.floor(para[2] * para[0]);
			break;
		case '/':
			value = Math.floor(para[2] / para[0]);
			break;
	}

	return value;
}

seven(times(five())); // 35
console.log(seven(times(five())));
four(plus(nine())); // 13
console.log(four(plus(nine())));
eight(minus(three())); // 5
console.log(eight(minus(three())));
six(dividedBy(two())); // 3
console.log(six(dividedBy(two())));
