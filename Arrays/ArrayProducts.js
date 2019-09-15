function findProduct(arr) {
	var left = 1,
		product = [];
	for (let ele of arr) {
		product.push(left);
		left = left * ele;
	}

	var right = 1;
	for (var i = arr.length - 1; i > -1; i--) {
		product[i] *= right;

		right *= arr[i];
	}

	return product;
}

findProduct([ 1, 2, 3, 5 ]);
