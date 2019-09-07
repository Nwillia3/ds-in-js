class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	preappend(value) {
		const newNode = new Node(value, this.head);
		this.head = newNode;

		this.size++; // increments size of by 1
	}

	append(value) {
		const newNode = new Node(value);
		//if there is no head
		if (!this.head) {
			this.head = newNode;
		} else {
			// Attach new node to the end of linked list.
			let currentNode = newNode; //track the node that is being usedinside the loop below

			//follows each next pointer until the end. The last node in the list has next = null so when we reach that node, we know we're at the end.
			while (currentNode.next) {
				currentNode = currentNode.next;
			}
			// at this point current = last node in list
			currentNode.next = newNode;
		}

		this.size++;
	}

	delete(value) {
		let currentNode = this.head;
		let previousNode;

		//edge case if there is no head
		if (!this.head) {
			return null;
		}

		//if the value to be deleted is the head make the next node the head
		if (currentNode.value === value) {
			this.head = currentNode.next;
		} else {
			while (currentNode.value !== value) {
				// while the node we are on does !== the node we are looking for
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			previousNode.next = currentNode.next; // skips over the current node and point to the next node
		}

		this.size--;
	}

	isEmpty() {
		return this.size === 0; // returns boolean of whether or not the list is empty
	}

	indexOf() {}
}
