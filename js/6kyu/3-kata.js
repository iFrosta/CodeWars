function findOdd(A) {
  let counts = {};
  for (let i = 0; i < A.length; i++) {
    counts[A[i]] = counts[A[i]] ? counts[A[i]] + 1 : 1;
  }
  for (const [key, value] of Object.entries(counts)) {
    if (value % 2 !== 0) return parseInt(key, 10)
  }
}


console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))// 5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]))// -1
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]))// 5
console.log(findOdd([10], 10)) // 10
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]))// 10
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]))// 1
