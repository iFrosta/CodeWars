function orderWeight(str) {
  return str.match(/[0-9]+/g).map(x => x.split('').map(x => parseInt(x, 10)).reduce((a, b) => a + b)).sort((a, b) => a - b)
}

// function orderWeight(str) {
//   return str.match(/[0-9]+/g).map(x => x.split('').map(x => parseInt(x, 10)).reduce((a, b) => a + b)).sort((a, b) => a - b)
// }

console.log(orderWeight("103 123 4444 99 2000")) // "2000 103 123 4444 99"
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")) // "11 11 2000 10003 22 123 1234000 44444444 9999"
