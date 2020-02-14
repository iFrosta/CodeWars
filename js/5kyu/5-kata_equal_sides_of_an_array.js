function findEvenIndex(arr) {
  let idx
  for (let y = 0; y < arr.length; y++) {
    let left = 0, right = 0
    for (let x = 0; x < y; x++) {
      left += arr[x]
    }
    for (let x = arr.length - 1; x > y; x--) {
      right += arr[x]
    }
    if (left === right) {
      idx = y
      break
    }
  }
  return (idx) ? idx : -1;
}

// left = arr.reduce((a, b) => (a < index) ? a + b : 0)

// function findEvenIndex(arr) {
//   let idx
//   for (let y = 0; y < arr.length; y++) {
//     let left = 0, right = 0
//     for (let x = 0; x < y; x++) {
//       left += arr[x]
//     }
//     for (let x = arr.length - 1; x > y; x--) {
//       right += arr[x]
//     }
//     if (left === right) {
//       idx = y
//       break
//     }
//   }
//   return (idx) ? idx : -1;
// }

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])) // 3, "The array was: [1,2,3,4,3,2,1] \n"
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])) // , 1, "The array was: [1,100,50,-51,1,1] \n";
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])) // , -1, "The array was: [1,2,3,4,5,6] \n"
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])) // , 3, "The array was: [20,10,30,10,10,15,35] \n"
