const report = require('./report');

describe('report', () => {
    it('returns Green: 1 when given "Green"', () => {
        expect(report("Green")).toEqual("Green: 1")
    })
    it('return Amber: 1 when given Amber', () => {
        expect(report("Amber")).toEqual("Amber: 1")
    })
    it('return Red: 1 when given Red', () => {
        expect(report("Red")).toEqual("Red: 1")
    })
    it('return Uncounted: 1 when given string that isnt Red Green or Amber', () => {
        expect(report("brown")).toEqual("Uncounted: 1")
    })
    it('return Red: 2 when given string "Red, Red"', () => {
        expect(report("Red, Red")).toEqual("Red: 2")
    })
    it('return Uncounted: 2 when given string "Brown, Brown"', () => {
        expect(report("Brown, Brown")).toEqual("Uncounted: 2")
    })
    it('return "Green: 1\nAmber: 1\nRed: 1" when given string "Green, Amber, Red"', () => {
        expect(report("Green, Amber, Red")).toEqual("Green: 1\nAmber: 1\nRed: 1")
    })
    it('return "Green: 1\nAmber: 1\nRed: 1\nUncounted: 2" when given string "Green, Amber, Red, Brown, Grey"', () => {
        expect(report("Green, Amber, Red, Brown, Grey")).toEqual("Green: 1\nAmber: 1\nRed: 1\nUncounted: 2")
    })
    it('return "No results have been given" when given an empty string', () => {
        expect(report("")).toEqual("No results have been given")
    })
    it('raises argument error "Input should be a comma separated string" when given an integer', () => {
        expect(() => {
            report(2);
        }).toThrowError("Input should be a comma separated string")});
    it('white space test return "Green: 1\nAmber: 1\nRed: 1\nUncounted: 2" when given string "Green, Amber, Red,Brown,Grey"', () => {
        expect(report("Green, Amber, Red,Brown,Grey")).toEqual("Green: 1\nAmber: 1\nRed: 1\nUncounted: 2")
    })
    it('lowercase inputs return the same expected outputs', () => {
        expect(report("green, amber, red,brown,grey")).toEqual("Green: 1\nAmber: 1\nRed: 1\nUncounted: 2")
    })

    
})