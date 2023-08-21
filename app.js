let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (a) => {
    let conv = a * 1.2
    return conv
}
const fromDollarToYen = (a) => {
    let conv = (a / 1.2) * 127.9
    return conv
}
const fromYenToPound = (a) => {
    let conv = (a / 127.9) * 0.8
    return conv
}


// this is my function that sums two numbers
/* const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))*/

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }; 