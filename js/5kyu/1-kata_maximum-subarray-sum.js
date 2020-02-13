const maxSequence = (arr) => {
  let sum = 0, part = 0

  for (let el of arr) {
    part += el
    sum = Math.max(sum, part)
    if (part < 0) part = 0
  }

  return sum
}


console.log(maxSequence([])) // 0
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6
