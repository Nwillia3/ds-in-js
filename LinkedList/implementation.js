class Node {
	constructor(data) {
		this.data = data; // the value you want to add to the Node
		this.nextElement = null; //the pointer to the nextElement Node
	}
}

class LinkedList {
	constructor() {
		this.head = new Node('Head'); // does not contain data but rather points to the linked list
		this.length = 0;
	}

	/* 4 steps
	(1) Create New Node
	(2) Set new Node.next to head.next
	(3) set head.nxt to newNode
	(4) increment length
	*/
	insertAtHead(data) {
		let newNode = new Node(data);
		newNode.nextElement = this.head.nextElement;
		this.head.nextElement = newNode;
		this.length++;
		return this; // returning the updated list
	}

	/* 4 steps 
	(1) create new Node 
	(2) create new variable start at head of list with 
	(3) iterate to the end of the list 
	(4) set the new variable .nextElement to the new Node 
	(5) increment
	*/
	insertAtTail(data) {
		//create a new Node
		let newNode = new Node(data);

		//start from head node
		let currentNode = this.head;

		//iterate to last element
		while (currentNode.nextElement !== null) {
			currentNode = currentNode.nextElement;
		}

		//add newNode to the currentNode.nextElement
		currentNode.nextElement = newNode;
		this.length++;
		return this;
	}

	/* 7 Steps
	(1) create a new Node
	(2) create new variable start at head of list with 
	(3) create variable to track currentindex and previousNode
	(4) Edge Case: index is longer than length of list
	(5) Edge Case: index is at the head
	(6) traverse thru list until currentIndex = index
	(6B)set previous node to currentNode and currentNode to currentNode.next
	(7) set newNode.next to currentNode, previous.next to newNode
	*/
	insertAtIndex(index, data) {
		// create a new Node
		let newNode = new Node(data);

		//start from the head
		let currentNode = this.head;

		// track the previous node
		let previousNode;
		let currentIndex = 0;

		//edge case indexing not in range of list
		if (index > this.length) {
			return false;
		}
		//edge case  indexing at the head
		if (index === 0) {
			newNode.nextElement = currentNode;
			this.head = newNode;
		} else {
			//if not at head

			//Loop thru to find the position requested
			while (currentIndex < index) {
				currentIndex++;
				//setting previous to current and current to current.next
				previousNode = currentNode;
				currentNode = currentNode.nextElement;
			}
			//adding the new Node between the previousNode and the currentNode
			newNode.nextElement = currentNode;
			previousNode.nextElement = newNode;
		}
		this.length++;
		return this;
	}
	/* 4 steps
	(1) create new variable start at head of list with 
	(2) traverse thru list until data is found or reach the end
	(2A) Check if data is in currentNode 
	(3) if not return false

	*/
	search(data) {
		//start at head
		let currentNode = this.head;

		//traverse the list until you find the data or reach the end
		while (currentNode !== null) {
			if (currentNode.data === data) {
				return true;
			}
			currentNode = currentNode.nextElement;
		}
		return false;
	}

	/*
	(1) create element for first element
	(2) check if element is not null
	(2B) if not null set head.next to element.next
	(3) decrement
	(4) else return false
	*/

	deleteAtHead() {
		let firstElement = this.head.nextElement;

		if (firstElement != null) {
			this.head.nextElement = firstElement.nextElement;
			this.length--;
			return this;
		}

		return false;
	}

	/* 5 Steps
	(1) check if list is empty
	(2) check if value is first element if so use deleteAtHead
	(3) if step 2 is false.... traverse thru list 
	(4) check if value is current Node
	(4A) if so set prev.next to curr.next
	(5) if not prev = curr and curr = curr.next
	Time Complexity O(n)
	*/
	deleteVal(value) {
		let deleted = false;
		if (this.isEmpty()) {
			return deleted;
		}

		let currNode = this.head.nextElement;
		let previous = null;

		if (value === currNode.data) {
			this.deleteAtHead();
			return !deleted;
		}

		while (currNode !== null) {
			if (value === currNode.data) {
				previous.nextElement = currNode.nextElement;
				deleted = true;
				break;
			}
			previous = currNode;
			currNode = currNode.nextElement;
		}
		return deleted;
	}

	isEmpty() {
		return this.length === 0;
	}

	/* MISSING
		delete at index
		delete at tail
	*/
}

let list = new LinkedList();
list.insertAtHead('fried chicken');
list.insertAtTail(10);
console.log(list.search('fried chicken'));
// console.log(list.deleteAtHead());
console.log(list.deleteVal('fried chicken'));
