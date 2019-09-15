function findSum(arr, value) {
	let hashy = {};
	for (let i = 0; i < arr.length; i++) {
		let pair = value - arr[i];
		console.log(pair);
		if (hashy[pair]) {
			console.log(arr[i]);
			return arr[i] > pair ? [ pair, arr[i] ] : [ arr[i], pair ];
		}
		hashy[arr[i]] = true;
	}

	return false;
}

console.log(findSum([ 1, 21, 3, 14, 5, 60, 7, 6 ], 81));
console.log(findSum([ 1, 2, 10, 6, 40 ], 46));
