function persistence(num) {
  num = num.toString()
  let i = 0
  while (num.length > 1) {
    num = num.split('').map(Number).reduce((a, b) => a * b).toString()
    i++
  }
  return i
}


console.log(persistence(39)) // 3
console.log(persistence(4)) // 0
console.log(persistence(25)) // 2
console.log(persistence(999)) // 4
