class Stack {
	constructor() {
		this.top = null;
		this.items = [];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	top() {
		return this.top;
	}

	size() {
		return this.items.length;
	}

	pop() {
		if (this.size() != 0) {
			if (this.size() == 1) {
				this.top = null;
				return this.items.pop();
			} else {
				this.top = this.items[this.size() - 2];
				return this.items.pop();
			}
		} else {
			return null;
		}
	}

	push(element) {
		this.top = element;
		this.items.push(element);
	}
}
