function score(dice) {
  let dc = [0, 0, 0, 0, 0, 0], tdr = [1000, 200, 300, 400, 500, 600], sdr = [100, 0, 0, 0, 50, 0]
  dice.forEach(x => dc[x - 1]++)
  return dc.reduce(function (s, x, i) {return s + (x >= 3 ? tdr[i] : 0) + sdr[i] * (x % 3)}, 0)
}

// function score(dice) {
//   const tab = [{v: 1, r: 0, s: 100, t: 1000,}, {v: 2, r: 0, s: 0, t: 200,}, {v: 3, r: 0, s: 0, t: 300,}, {v: 4, r: 0, s: 0, t: 400,}, {v: 5, r: 0, s: 50, t: 500,}, {v: 6, r: 0, s: 0, t: 600,}]
//   dice.forEach(die => tab[die - 1].r += 1)
//
//   return tab.map(die => {
//     if (die.r > 3 && die.v !== 1) return die.t + die.s * die.r
//     if (die.r > 3 && die.v === 1) return 1100
//     if (die.r === 3) return die.t
//
//     return die.s * die.r
//   }).reduce((t, v) => t + v, 0)
// }

//Description:
// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.
// Example scoring
//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   50 + 2 * 100 = 250
//  1 1 1 3 1   1000 + 100 = 1100
//  2 4 4 5 4   400 + 50 = 450
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

console.log(score([2, 3, 4, 6, 2])) //  == 0,   "Should be 0 :-("
console.log(score([4, 4, 4, 3, 3])) // == 400, "Should be 400"
console.log(score([2, 4, 4, 5, 4])) // == 450, "Should be 450"
console.log(score([1, 1, 1, 3, 1])) // 1100
console.log(score([1, 1, 1, 3, 4])) // 1000
console.log(score([5, 1, 3, 4, 1])) // 250


// function score(dice) {
//   const tab = [{v: 1, r: 0, s: 100, t: 1000,}, {v: 2, r: 0, s: 0, t: 200,}, {v: 3, r: 0, s: 0, t: 300,}, {v: 4, r: 0, s: 0, t: 400,}, {v: 5, r: 0, s: 50, t: 500,}, {v: 6, r: 0, s: 0, t: 600,}]
//
//   dice.forEach(die => tab[die - 1].r += 1)
//
//   return tab.map(die => {
//     if (die.r > 3) return die.t + die.s * die.r
//     if (die.r === 3) return die.t
//
//     return die.s * die.r
//   }).reduce((t, v) => t + v, 0)
// }


// function score(dice) {
//   let uniq = {}, result = 0
//   for (let i = 0; i < dice.length; i++) uniq[dice[i]] = 1 + (uniq[dice[i]] || 0)
//   for (const [k, v] of Object.entries(uniq)) {
//     if (v >= 3) {
//       if (k === '1') result += k * 1000
//       result += k * 100
//     } else if (v === 3) {
//       if (k === '1') result += k * 1000
//       else result += k * 100
//     } else if (v === 1 && k === '5') result += k * 10
//     else if (k === '1' && v === 2) result += 2 * 100
//     else if (k === '1') result += k * 100
//   }
//   return result
// }

// function score(dice) {
//   let uniq = {}, result = 0
//   for (let i = 0; i < dice.length; i++) uniq[dice[i]] = 1 + (uniq[dice[i]] || 0)
//   for (const [k, v] of Object.entries(uniq)) {
//     if (v >= 3) {
//       if (k === '1') result += k * 1000
//       if (k !== '1') result += k * 100
//     } else if (v === 1 && k === '5') result += k * 10
//     else if (k === '1' && v === 2) result += 2 * 100
//     else if (k === '1') result += k * 100
//   }
//   return result
// }

