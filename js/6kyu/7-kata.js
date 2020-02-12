const isPangram = string => (string.toLowerCase().match(/[A-Za-z]/g).sort().filter((x, i, a) => !i || x != a[i - 1]).length === 26)


console.log(isPangram("The quick brown fox jumps over the lazy dog.")) // true
console.log(isPangram("This is not a pangram")) // false
