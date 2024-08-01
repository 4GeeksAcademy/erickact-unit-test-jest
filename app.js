const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = parseFloat((valueInEuro * 1.07).toFixed(2));
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = parseFloat((valueInDollar/1.07 * 156.5).toFixed(2))
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = parseFloat((valueInYen/156.5 * 0.87).toFixed(2))
    return valueInPound;
}

const sum = (a,b) => {
    return a + b;
}
console.log(sum(7,3))


module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};