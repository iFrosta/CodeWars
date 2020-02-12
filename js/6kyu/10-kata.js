function high(x){
  let xo = x.split(' ').map(x => [...x].reduce((a, b) => a+b.charCodeAt(0) - 96, 0))
  return x.split(' ')[xo.indexOf(Math.max(...xo))];
}

// function high(x) {
//   let alp = 'abcdefghijklmnopqrstuvwxyz', words = x.toLowerCase().match(/([^\s]+)/g), output = {}, word = {key: '', value: 0}
//   words.forEach(el => {
//     output[el] = []
//     el.toLowerCase().match(/[a-z]/g).forEach(a => output[el].push(alp.indexOf(a)))
//     output[el] = output[el].reduce((a, b) => a + b)
//   })
//   for (const [key, value] of Object.entries(output)) {
//     if (value > word.value) {
//       word.value = value
//       word.key = key
//     }
//   }
//   return word.key
// }


console.log(high('man i need a taxi up to ubud')) // 'taxi'
console.log(high('what time are we climbing up the volcano')) //  volcano'
console.log(high('take me to semynak')) // 'semynak'
