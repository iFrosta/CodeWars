function bouncingBall(h, b, w, c = 0) {
  if (h === w && c === 0 || h <= 0 || c > 600 || b >= 1) {
    return -1
  } else {
    if (h > w && c === 0) c = 1
    if (h <= w) return c
    if (h * b > w) c += 2

    return bouncingBall(h * b, b, w, c)
  }
}


// const bouncingBall = (h, b, w) => (b > 0 && b < 1 && w < h) ? (1 + 2 * Math.floor(Math.log(w / h) / Math.log(b))) : -1


console.log(bouncingBall(3.0, 0.66, 1.5)) // 3
console.log(bouncingBall(30.0, 0.66, 1.5))// 15
console.log(bouncingBall(3.0, 1, 1.5))// -1
console.log(bouncingBall(2.0, 0.60, 1.5)) // 1
