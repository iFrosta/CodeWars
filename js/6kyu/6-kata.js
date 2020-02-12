function narcissistic(value) {
  let _value = value.toString().split('').map(Number)
  if (_value) {
    let output = []
    _value.forEach(el => output.push(Math.pow(el, _value.length)))
    return (output.reduce((a, b) => a + b, 0) === value)
  } else return false
}


console.log(narcissistic(7)) // true, "7 is narcissistic"
console.log(narcissistic(371)) // true, "371 is narcissistic"
console.log(narcissistic(153)) // true
console.log(narcissistic(1634)) // true
console.log(narcissistic(" ")) // false
