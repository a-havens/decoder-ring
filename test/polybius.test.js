const expect = require("chai").expect;
const { polybius } = require('../src/polybius.js');

describe("polibius() submission tests written by Amanda", () => {
  
//translates i and j to 42 while encoding
  it('should translate "i" and "j" to "42"', () => {
    const input = 'i j';
    const encoded = polybius(input);

    expect(encoded).to.equal('42 42');
  });

//translates 42 to (i/j) while decoding
it('should translate "42" to "(i/j)" while decoding', () => {
    const encodedInput = '4242';
    const decoded = polybius(encodedInput, false);

    expect(decoded).to.equal('(i/j)(i/j)');
  });

//ignores capital letters
it( "Should ignore capital letters", () => {
    const plainText = polybius.input;
    const shift = polybius.shift;
    
    expect(plainText, shift).not.match(/[A-Z]/);
  });

//maintains spaces in messages, before and after encoding/decoding
  it("should maintain spaces and non-alphabetic symbols", () => {
    const input = "Hello, World! 123";
    const shift = 3;
    const expected = "3251131343, 2543241341! 123";
    const result = polybius(input, shift);

    expect(result).to.equal(expected);
  });
});
