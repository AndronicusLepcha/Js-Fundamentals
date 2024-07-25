let s = 'This is a string'
console.log(`Hello this is a string interpolation ${s}`)

const StringObj = new String("Androncius Lepcha")
console.table([StringObj[0],StringObj.length,StringObj.charAt(2),StringObj.substring(0,3)])

const url="https://andro.com/andro%20profile"
console.log(url.replace('%20','-'))