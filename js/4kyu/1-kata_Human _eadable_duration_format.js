function formatDuration(s) {
  if (s <= 0) return 'now'
  let time = [Math.floor(s / 31536000), parseInt((s / 86400) % 365), parseInt((s / 3600) % 24), parseInt((s / 60) % 60), s % 60],
    dict = [' year', ' day', ' hour', ' minute', ' second'], output = ['', '', '', '', '']

  time.forEach((e, i) => {
    if (e >= 1) (e === 1) ? output[i] = e + dict[i] : output[i] = e + dict[i] + 's'
  })

  return output.filter(a => a.length > 0).join(', ').replace(/,(?=[^,]*$)/, ' and')
}

console.log(formatDuration(1)) // "1 second");
console.log(formatDuration(2)) // "2 seconds");
console.log(formatDuration(62)) // , "1 minute and 2 seconds");
console.log(formatDuration(120)) // , "2 minutes");
console.log(formatDuration(3600)) // , "1 hour");
console.log(formatDuration(3662)) // "1 hour, 1 minute and 2 seconds");
console.log(formatDuration(15724800)) // "182 days, 1 hour, 44 minutes and 40 seconds");
console.log(formatDuration(16843221))
console.log(formatDuration(132113944))  // 4 years, 68 days, 3 hours and 4 minutes

// if (time[0] !== 0 && time[1] !== 0 && time[2] !== 0 && dict[i] !== ' minute' && dict[i] !== ' second' || time[2] !== 0 && time[3] !== 0 && dict[i] === ' hour') output += ', '
// else if (time[1] !== 0 && dict[i] === ' day') output += ', '
//
// if (time[3] !== 0 && time[4] !== 0 && dict[i] === ' minute') output += ' and '
// else if (time[2] !== 0 && time[3] !== 0 && time[4] === 0 && dict[i] === ' hour') output += ' and '

// function formatDuration(s) {
//   if (s <= 0) return 'now'
//
//   let time = [Math.floor(s / 60 / 60), Math.floor(s / 60 % 60), Math.floor(s % 60)],
//     output = '', dict = [' hour', ' minute', ' second', ' day', ' year']
//   // console.log(s, time)
//
//   time.forEach((e, i) => {
//     // console.log(e,i)
//     if (e === 1) output += e + dict[i]
//     if (e > 1) output += e + dict[i] + 's'
//     if (time[0] !== 0 && time[1] !== 0 && dict[i] === ' hour') output += ', '
//     if (time[1] !== 0 && time[2] !== 0 && dict[i] === ' minute') output += ' and '
//   })
//   return output
// }


// if (count >= 1 && count < 4) {
//   s[0] = s[0] / 6
//   output += (s[0] === '1') ? s[0] + ' ' + dict[1] + 's' : s[0] + ' ' + dict[1] //  minutes
//   s.splice(0, s.length - 1)
//   count = Math.round(s / 60)
// }
// console.log(s)
// if (count === 0) {
//   if (s[0] !== 0) output += (s[0] !== '1') ? s[0] + ' ' + dict[0] + 's' : s[0] + ' ' + dict[0] // seconds
// }
// if (s[s.length - 1]) s[s.length - 1] = (s[0] !== '1') ?  s[0] + ' ' + dict[1] + 's' :  s[0] + ' ' + dict[1]
// if ()
//   return (s[0] !== '1') ?  s[0] + ' ' + dict[1] + 's' :  s[0] + ' ' + dict[1] // second seconds

// if (s.length === 1) return (s[0] !== '1') ?  s[0] + ' ' + dict[1] + 's' :  s[0] + ' ' + dict[1] // second seconds
