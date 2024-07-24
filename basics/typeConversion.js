// Int Conversion
let num="hello world"
let getInteger=Number(num)
console.table([typeof getInteger,getInteger])

// "888" -> 888
// "andro" -> number -> NaN
// true-> number -> 1 && flase -> number -> 0
// Nan -> Number -> NaN
// "hello world "-> NaN 

// String Conversion

let string=NaN
let getString=String(string)
console.table([typeof getString,getString])

// 123 -> String -> '123'
// true -> String -> 'true'
// Nan -> String -> 'Nan'

//Boolean Conversion
let bool=0
let getBool=Boolean(bool)
console.table([typeof getBool,getBool])

// NaN -> Boolean -> false 
// 1 -> Boolean -> true
// "andro"-> Boolean -> true 
// 0 -> Boolean -> false