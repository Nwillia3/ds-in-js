class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}
class LinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
	}
	size() {
		return this.length;
	}
	head() {
		return this.head;
	}

	preappend(element) {
		const newNode = new Node(element, this.head);
		this.head = newNode;

		this.length++; // increments size of by 1
	}

	append(element) {
		let node = new Node(element);
		if (this.head === null) {
			this.head = node;
		} else {
			let currentNode = this.head;
			while (currentNode.next) {
				currentNode = currentNode.next;
			}
			currentNode.next = node;
		}
		this.length++;
	}
	remove(element) {
		let currentNode = this.head;
		let previousNode;
		if (currentNode.element === element) {
			this.head = currentNode.next;
		} else {
			while (currentNode.element !== element) {
				previousNode = currentNode;
				currentNode = currentNode.next;
				if (currentNode.next === null) {
					return `${element} does not exist`;
				}
			}
			previousNode.next = currentNode.next;
		}
		this.length--;
	}
	isEmpty() {
		return this.length === 0;
	}
	indexOf(element) {
		let currentNode = this.head;
		let index = -1;
		while (currentNode) {
			index++;
			if (currentNode.element === element) {
				return index;
			}
			currentNode = currentNode.next;
		}
		return -1;
	}
	elementAt(index) {
		let currentNode = this.head;
		let count = 0;
		while (count < index) {
			count++;
			currentNode = currentNode.next;
		}
		return currentNode.element;
	}
	addAt(index, element) {
		let node = new Node(element);
		let currentNode = this.head;
		let previousNode;
		let currentIndex = 0;
		if (index > this.length) {
			return false;
		}
		if (index === 0) {
			node.next = currentNode;
			this.head = node;
		} else {
			while (currentIndex < index) {
				currentIndex++;
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			node.next = currentNode;
			previousNode.next = node;
		}
		this.length++;
	}
	removeAt(index) {
		let currentNode = this.head;
		let previousNode;
		let currentIndex = 0;
		if (index < 0 || index >= this.length) {
			return null;
		}
		if (index === 0) {
			this.head = currentNode.next;
		} else {
			while (currentIndex < index) {
				currentIndex++;
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			previousNode.next = currentNode.next;
		}
		this.length--;
		return currentNode.element;
	}
}

const vehicles = new LinkedList();
vehicles.append('Trucks');
vehicles.append('Sudans');
vehicles.append('SUV');
vehicles.append('coups');
vehicles.append('18-wheelers');

// vehicles.preappend('Jeep');

// console.log(vehicles.size);
// console.log(vehicles.removeAt(6));
// vehicles.append('bicycle');
// vehicles.append('scotter');
// console.log(vehicles.size);
// vehicles.addAt(1, 'Mini-Vans');
// console.log(vehicles.isEmpty());

console.log(vehicles.elementAt(1));
console.log(vehicles.remove('trucks'));
console.log(vehicles.indexOf('bicycle'));
console.log(vehicles.removeAt(1));
