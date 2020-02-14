'zero one two three four five six seven eight nine'.split(' ').forEach(
  (mth, num) => this[mth] = (f = val => val) => f(num)
)

let plus      = (r) => (l) => l + r
let minus     = (r) => (l) => l - r
let times     = (r) => (l) => l * r
let dividedBy = (r) => (l) => l / r

// function expression(number, operation){
//   if(!operation) return number
//   return operation(number)
// }
//
// function zero(operation) {return expression(0, operation)}
// function one(operation) {return expression(1, operation)}
// function two(operation) {return expression(2, operation)}
// function three(operation) {return expression(3, operation)}
// function four(operation) {return expression(4, operation)}
// function five(operation) {return expression(5, operation)}
// function six(operation) {return expression(6, operation)}
// function seven(operation) {return expression(7, operation)}
// function eight(operation) {return expression(8, operation)}
// function nine(operation) {return expression(9, operation)}
//
// function plus(x) {return function(y) {return y + x}}
// function minus(x) {return function(y) {return y - x}}
// function times(x) {return function(y) {return Math.floor( y * x)}}
// function dividedBy(x) {return function(y) {return Math.floor(y / x)}}

console.log(zero(times(five()))) // 35
console.log(seven(times(five()))) // 35
console.log(four(plus(nine()))) // 13
console.log(eight(minus(three()))) // 5
console.log(six(dividedBy(two()))) // 3
