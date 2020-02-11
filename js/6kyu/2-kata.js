// const digital_root = n => {
//   return n.toString().length === 1 ? n : digital_root(Number(n).toString().split('').reduce((acc,item) => Number(acc) + Number(item), 0))
// }

function digital_root(n) {
  return (n - 1) % 9 + 1;
}

console.log(digital_root(16))// 7
console.log(digital_root(456))// 6
