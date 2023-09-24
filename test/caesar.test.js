const expect = require("chai").expect;
const { caesar } = require('../src/caesar.js');

describe("caesar() submission tests written by Amanda", () => {
  
//returns false if shift valus is =0 || <-25 || >25 || not present
  const testCases = [
    { input: 'thinkful', shift: 3, expected: 'wklqnixo' },
    { input: 'thinkful', shift: -3, expected: 'qefkhcri' },
    { input: 'wklqnixo', shift: -3, expected: 'thinkful' },
    { input: "This is a secret message!", shift: 8, encode: false, expected: 'lzak ak s kwujwl ewkksyw!' },
    { input: "BPQA qa I amkzmb umaaiom!", shift: 8, encode: false, expected: 'this is a secret message!' },
    { input: "thinkful", expected: false },
    { input: "thinkful", shift: 99, expected: false },
    { input: "thinkful", shift: -26, expected: false },
  ];

  testCases.forEach(({ input, shift, encode = true, expected }) => {
    it(`should return ${expected} for input "${input}" and shift ${shift}, encode: ${encode}`, () => {
      const result = caesar(input, shift, encode);
      
      expect(result).to.equal(expected);
    });
  });

//ignore capital letters
  it( "Should ignore capital letters", () => {
    const plainText = caesar.input;
    const shift = caesar.shift;
    
    expect(plainText, shift).not.match(/[A-Z]/);
  });

//handles a shift that goes past the end of the alphabet
  it("should wrap around the alphabet for positive and negative shifts", () => {
    const input = "xyz";
    const shift = 5;
    const expectedPositiveShift = caesar(input, shift);
    const negativeShift = -5;
    const expectedNegativeShift = caesar(input, negativeShift);

    expect(expectedPositiveShift).to.equal("cde");
    expect(expectedNegativeShift).to.equal("stu");
  });

//maintains spaces and nonalphabetic symbols
  it("should maintain spaces and non-alphabetic symbols", () => {
    const input = "Hello, World! 123";
    const shift = 3;
    const expected = "khoor, zruog! 123";
    const result = caesar(input, shift);

    expect(result).to.equal(expected);
  });
});
