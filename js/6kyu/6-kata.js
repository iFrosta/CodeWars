function narcissistic(value) {
  if (value > 0) {
    let output = []
    let number = value.toString().split('').map(Number)
    if (number.length > 1) {
      number.forEach(el => output.push(Math.pow(el, number.length)))
      return (output.reduce((a, b) => a + b, 0) === value)
    } else {
      return true
    }
  } else {
    return false
  }
}


console.log(narcissistic(7)) // true, "7 is narcissistic"
console.log(narcissistic(371)) // true, "371 is narcissistic"
console.log(narcissistic(153)) // true
console.log(narcissistic(1634)) // true
console.log(narcissistic(" ")) // false
