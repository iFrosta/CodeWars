let decodeBits = function (bits) {
  let tu = Math.min(...message.map(x => x.length))
  return bits.replace(/^0+|0+$/g, "").match(/0+|1+/g).map(x => x == "1".repeat(tu) ? "." : x == "111".repeat(tu) ? "-" : x == "0".repeat(tu) ? "" : x == "000".repeat(tu) ? " " : x == "0000000".repeat(tu) ? "  " : "").join("")
}
let decodeMorse = function (morseCode) {
  return morseCode.split(" ").map(x => x === "" ? " " : MORSE_CODE[x]).join("").trim()
}

decodeMorse(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'))
