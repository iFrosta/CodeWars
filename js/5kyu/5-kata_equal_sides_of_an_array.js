const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0)
const findEvenIndex = a => a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));


// left = arr.map((e, i) => i).filter(i => i <= y).map(i => arr[i]).reduce((a, b) => a + b)

// left = arr.map((e, i) => e > 0 ? i : null).filter(i => i <= y).map(i => arr[i]).reduce((a, b) => a + b)
// right = arr.map((el, index) => el > 0 ? index : null).filter(index => index > y).reduce((a, b) => a + b)
//right = arr.map((e, i) => e > 0 ? i : null).filter(i => i > y).map(i => arr[i])//.reduce((a, b) => a + b)

// left = arr.map((el, index) => el > 0 ? index : null).filter(index => index < y)
// console.log(arr.map((el, index) => el > 0 ? index : null).filter(index => index <= y).reduce((a, b) => a + b))

// function findEvenIndex(arr) {
//   let idx
//   for (let y = 0; y < arr.length; y++) {
//     let left = 0, right = 0
//
//     for (let x = 0; x < y; x++) left += arr[x]
//     for (let x = arr.length - 1; x > y; x--) right += arr[x]
//
//     if (left === right) {
//       idx = y
//       break
//     }
//   }
//   return (idx === undefined) ? -1 : idx
// }

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])) // 3, "The array was: [1,2,3,4,3,2,1] \n"
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])) // , 1, "The array was: [1,100,50,-51,1,1] \n";
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])) // , -1, "The array was: [1,2,3,4,5,6] \n"
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])) // , 3, "The array was: [20,10,30,10,10,15,35] \n"
console.log(findEvenIndex([8, 0])) // 0
