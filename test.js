const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.75);
})

test("Twenty dollars should be 2925.23 yen", function() {
    const yen = fromDollarToYen(20);
    const expected = 20/1.07 * 156.5;
    expect(fromDollarToYen(20)).toBe(2925.23);
})

test("five hundred yen should be 2.78 pounds", function() {
    const dollars = fromYenToPound(500);
    const expected = 500/156.5 * 0.87;
    expect(fromYenToPound(500)).toBe(2.78);
})