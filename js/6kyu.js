function arrayDiff(a, b) {
  if (b.length) {
    for (let i = 0; i < b.length; i++) {
      a = a.filter(item => item !== b[i])
    }
  }
  return a
}

console.log(arrayDiff([], [4, 5])) // []
console.log(arrayDiff([3, 4], [3])) // [4]
console.log(arrayDiff([1, 8, 2], [])) // [1,8,2]

console.log(arrayDiff([1, 2, 2, 2, 3], [2])) // [1,3]
console.log(arrayDiff([1, 2], [1])) // [2]

console.log(arrayDiff([13, -7, -13, -20, 4, -5, 10, -11, 0, -13, 14], [-20, 10, 14, -13, 0, -5, 4])) // [13, -7, -11]
