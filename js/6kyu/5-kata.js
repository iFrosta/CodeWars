const order = (words) => {
  if (words) {
    let output = []
    words.match(/(\w+)/g).map((el) => output.push([el, parseInt(el.match(/\d+/g), 10)]))
    return output.sort((a, b) => a[1] - b[1]).join(' ').replace(/,\d/g, '')
  } else {
    return words
  }
}


console.log(order("is2 Thi1s T4est 3a")) // "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")) // "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order("")) // ""
