if (2  === 2){    // Strict checks 
    console.log(" Executed ")
}

// short hand notation 
const bal = 90000
if (bal>6000) console.log("Rich ")

    // Switch 

    const month = 4

    switch(month){
        case 1: console.log("January")
            break;
        case 2: console.log("February")
            break;
        case 3: console.log("March")
            break;
        case 4: console.log("April")
            break;
        case 5: console.log("May")
            break;
        default: console.log("Enter a valid month")
            break;
    }


    // Nullish Coalescing Operator (??) : null undefined

const val1 = null ?? 23
console.log(val1)


// ternary operator 
// conditon ? true : false 
const balance=70000

balance > 10000 ? console.log("Rich Kid") : console.log("Poor Kid")
