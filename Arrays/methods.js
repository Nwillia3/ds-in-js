let arr = [ 1, 2, 3, 6, 7 ];

// splice(index,howManyElementsToremove, ...itemsYouWantToadd)

arr.splice(2, 0, 'item'); //adds 'items' to the arr at index 2
console.log(arr);

arr.splice(2, 2); // removes 'item' at index 2 and the number 3 at index 3
console.log(arr);

arr.splice(2, 0, 'item', 3); // adds back 'item' at index 2 and the number 3 at index 3
console.log(arr);

console.log(arr.slice(2, 5)); // contains ['item', 3, 6]

// push, pop, unshift, shift, splice, slice, for...of, concat, reverse, delete
