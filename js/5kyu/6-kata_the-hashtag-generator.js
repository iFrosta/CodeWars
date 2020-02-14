const generateHashtag = str => {
  if (str.match(/[a-z]/gi)) {
    str = '#' + str.match(/(\w+)/gi).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')
    if (str.length <= 140) return str
  }
  return false
}

const generateHashtag = str => (s = '#'+str.trim().split(" ").filter(e=>e).map(e=>e[0].toUpperCase() + e.substring(1,e.length).toLowerCase()).join("")).length > 1 && s.length <= 140 ? s : false


// str = str.replace(/#/gi, '')
// str = str.replace(/ /g,'')


console.log(generateHashtag("")) // false
console.log(generateHashtag(" ".repeat(200))) // false
console.log(generateHashtag("Do We have A Hashtag")) // #DoWeHaveAHashtag
console.log(generateHashtag("Codewars")) // #Codewars
console.log(generateHashtag("Codewars Is Nice")) // #CodewarsIsNice
console.log(generateHashtag("Codewars is nice")) // #CodewarsIsNice
console.log(generateHashtag("code" + " ".repeat(140) + "wars")) // #CodeWars
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")) // false
console.log(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138)) // Should work
console.log(generateHashtag("a".repeat(140))) // false
