// function bouncingBall(h, b, w, c = 0) {
//   if (h === w && c === 0 || h <= 0 || c > 600 || b >= 1) {
//     return -1
//   } else {
//     if (h > w && c === 0) c = 1
//     if (h <= w) return c
//     if (h * b > w) c += 2
//
//     return bouncingBall(h * b, b, w, c)
//   }
// }

const bouncingBall = (h, b, w) => (b >= 1 || h < w || b <= 0) ? -1 : Math.ceil(Math.log(w / h) / Math.log(b)) * 2 - 1

// const bouncingBall = (h, b, w) => (b > 0 && b < 1 && w < h && h > 0) ? (1 + 2 * Math.floor(Math.log(w / h) / Math.log(b))) : -1

//A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.
// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
// His mother looks out of a window 1.5 meters from the ground.
// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
// Example:
// - h = 3, bounce = 0.66, window = 1.5, result is 3
// - h = 3, bounce = 1, window = 1.5, result is -1
// (Condition 2) not fulfilled).


console.log(bouncingBall(3.0, 0.66, 1.5)) // 3
console.log(bouncingBall(30.0, 0.66, 1.5))// 15
console.log(bouncingBall(3.0, 1, 1.5))// -1
console.log(bouncingBall(2.0, 0.60, 1.5)) // 1


// genTest()
const genTest = () => {
  for (let i = 0; i < 86; i++) {
    console.log(`console.log(bouncingBall(${Math.random() * (100 - 1) + 1}, ${(Math.random() * (10 - 1) + 1) * 0.1}, ${Math.random() * (30 - 1) + 1}))`)
  }
}
