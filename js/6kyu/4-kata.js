function iqTest(numbers) {
  let counts = {odd: [], even: []}
  numbers.match(/\d+/g).map(Number).forEach(function (el, idx) {
    (el % 2 === 0) ? counts.odd.push(`${idx}`) : counts.even.push(`${idx}`)
  })
  return parseInt((counts.odd.length === 1) ? counts.odd : counts.even, 10) + 1
}


console.log(iqTest("2 4 7 8 10")) // 3 - Third number is odd, while the rest of the numbers are even
console.log(iqTest("1 2 1 1")) // 2 // Second number is even, while the rest of the numbers are odd
console.log(iqTest("1 2 2")) // 1
