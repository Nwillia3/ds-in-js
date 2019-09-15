class Queue {
	constructor() {
		this.items = [];
	}

	enqueue(element) {
		this.items.push(element);
	}

	dequeue() {
		if (this.isEmpty()) {
			return null;
		} else {
			return this.items.shift();
		}
	}

	size() {
		return this.items.length;
	}

	isEmpty() {
		return this.size() == 0;
	}

	getFront() {
		return this.items[0];
	}
}

let exam = new Queue();
exam.enqueue(1);
exam.enqueue(2);
exam.enqueue(3);
exam.enqueue(4);
exam.dequeue();

console.log(exam.size());
console.log(exam.getFront());

function highAndLow(numbers) {
	// ...
	let high,
		low,
		i = 1;

	let arr = numbers.split(' ');
	console.log(arr);

	high = arr[0];
	low = arr[0];

	while (i < arr.length) {
		if (parseInt(arr[i]) > high) {
			console.log(high);
			console.log(arr[i]);
			high = arr[i];
			console.log(high);
		} else if (parsearr[i] < low) {
			low = arr[i];
			console.log(low);
		}
		i++;
	}
	return high.toString() + ' ' + low.toString();
}

console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'));
