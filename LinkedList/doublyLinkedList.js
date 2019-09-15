class Node {
	constructor(value) {
		this.value = value;
		this.previous = null;
		this.next = null;
	}
}

class DLL {
	constructor() {
		this.head = new Node('Head');
		this.length = 0;
	}

	// WRITE DOWN THE STEPS
	deleteVal(item) {
		let deleted = false;

		if (this.length == 0) return deleted;

		let currNode = this.head.next;
		// if currNode is first Node in list
		if (currNode.value === item) {
			this.head.next = currNode.next; // skip over the currNode
			currNode.next.previous = this.head; // point the next node after currNode previous pointer to the head
		}

		while (currNode !== null) {
			if (item == currNode.value) {
				currNode.previous.next = currNode.next; // previous node now points to next node
				currNode.next.previous = current.previous; // next node now points back to the previous node
				deleted = true;
				break;
			}
			currNode = currNode.next;
		}

		return deleted;
	}
}
