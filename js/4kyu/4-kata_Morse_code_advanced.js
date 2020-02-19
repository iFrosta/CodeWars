let decodeBits = function(bits){
  message = bits.replace(/^0+|0+$/g,"").match(/0+|1+/g);
  tu = Math.min(...message.map(x=>x.length));
  mose = message.map(x=> x=="1".repeat(tu) ? ".": x=="111".repeat(tu) ? "-" : x=="0".repeat(tu) ? "" : x=="000".repeat(tu) ? " " : x=="0000000".repeat(tu) ? "  " : "").join("");
  return mose;
}
let decodeMorse = function(morseCode){
  return morseCode.split(" ").map(x=> x=="" ? " " : MORSE_CODE[x]).join("").trim();
}

// function unStr(str, f) {
//   let ret = []
//   str.split('').reduce((p, c) => {
//     if (p === 0) {
//       ret.push(c)
//       return f - 1
//     }
//     return p - 1
//   }, f - 1)
//   return ret.join('')
// }
//
// function seqLength(str) {
//   let ret = str.split('').reduce((p, c) => {
//     if (c === p.char) {
//       p.l = p.l + 1
//     } else {
//       if (p.l < p.shortLen) p.shortLen = p.l
//
//       p.char = c
//       p.l = 1
//     }
//     return p
//   }, {
//     char: null,
//     l: Infinity,
//     shortLen: Infinity
//   })
//   return (ret.l < ret.shortLen) ? ret.l : ret.shortLen
// }
//
// function decodeBits(b) {
//   b = b.substring(b.indexOf('1'), b.lastIndexOf('1') + 1)
//   b = unStr(b, seqLength(b))
//   return b.replace(/0000000/g, '   ').replace(/000/g, ' ').replace(/111/g, '-').replace(/1/g, '.').replace(/0/g, '')
// }
//
// let decodeMorse = morseCode => morseCode.trim().split('   ').map( (w) => w.split(' ').map((c) => MORSE_CODE[c]).join('')).join(' ')



decodeMorse(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'))
