/* Merge two sorrted Array Tips

create new list to append to
initiaize starting index vars for both list
traverse thru both list simateously comparing index
append whichever list index value is lower and increment that index
Edge --> check if the indexs are less than length of list to add the remaining element
splice list from 0 to index and add that to the new list created

*/

function mergeArrays(arr1, arr2) {
	let merged = [];
	let i = 0,
		j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			merged.push(arr1[i]);
			i++;
		} else {
			merged.push(arr2[j]);
			j++;
		}
	}

	if (i <= arr1.length - 1) {
		arr1.splice(0, i);
		merged = [ ...merged, ...arr1 ];
	} else if (j <= arr2.length - 1) {
		arr2.splice(0, j);
		merged = merged.concat(arr2);
	}
	return merged;
}
console.log(mergeArrays([ 1, 3, 4, 5 ], [ 2, 6, 7, 8 ]));

/* Find Two Sum
    create a Map / hash table
    loop thru list 
    *** You want to be if the complimentary pair value of an element is also contained in the list
    substract the element from the value to get the complimentary pair needed
    check if pair is in hash table if not add element to the hash table return the pair elements if found
    return false 
*/
function findTwoSum(arr, value) {
	let hash = new Map();
	let pair;
	for (let a of arr) {
		pair = value - a;
		if (hash.has(pair)) return [ a, pair ];
		hash.set(a);
	}
	return false;
}

console.log(findTwoSum([ 1, 21, 3, 14, 5, 60, 7, 6 ], 81));
