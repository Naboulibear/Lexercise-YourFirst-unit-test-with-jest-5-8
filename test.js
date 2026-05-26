const {sum,fromEuroToDollar,fromDollarToYen,fromYenToPound} = require("./app.js")
test("adds 14+9 To equal " ,() =>{
    let Total = sum(14,9)
    expect(Total).toBe(23) 
})

test(" 1 euro Should Be 1.07 dollars " ,() =>{
    let Dollars = fromEuroToDollar(3.5)
    let expected = 3.5*1.07
    expect(Dollars).toBe(expected) 
})

test(" 1 dollar should be about 146.26 yen " ,() =>{
    let Yen = fromDollarToYen(1)
    let expected = (1/1.07)*156.5
    expect(Yen).toBeCloseTo(expected) 
})

test(" 1 yen should be approximately 0.00556 pounds " ,() =>{
    let pounds = fromYenToPound(1)
    let expected = (1/156.5)*0.87
    expect(pounds).toBeCloseTo(expected) 
})