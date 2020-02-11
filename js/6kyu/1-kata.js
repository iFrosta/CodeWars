function arrayDiff(a, b) {
  return a.filter(e => !b.includes(e));
}

// Description:
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b.
//   arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
//   arrayDiff([1,2,2,2,3],[2]) == [1,3]

console.log(arrayDiff([], [4, 5])) // []
console.log(arrayDiff([3, 4], [3])) // [4]
console.log(arrayDiff([1, 8, 2], [])) // [1,8,2]

console.log(arrayDiff([1, 2, 2, 2, 3], [2])) // [1,3]
console.log(arrayDiff([1, 2], [1])) // [2]

console.log(arrayDiff([13, -7, -13, -20, 4, -5, 10, -11, 0, -13, 14], [-20, 10, 14, -13, 0, -5, 4])) // [13, -7, -11]
