const rot13 = str => str.replace(/[a-z]/gi, l => String.fromCharCode(l.charCodeAt(0) + (l.toLowerCase() <= 'm' ? 13 : -13)))


console.log(rot13("test")) // grfg
console.log(rot13("Test")) // Grfg
