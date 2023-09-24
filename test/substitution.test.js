const expect = require("chai").expect;
const {substitution } = require('../src/substitution.js');

describe("substitution() submission tests written by Amanda", () => {

//returns false if given alphabet doesn't ===26 characters
it('should return false if given alphabet does not equal 26 characters', () => {
    const input = 'hello world';
    const invalidAlphabet = 'abcdefghijklmnopqrstuvwxy'; // Alphabet with 25 characters
    const result = substitution(input, invalidAlphabet);
  
    expect(result).to.be.false;
  });
  
//correctly translates given phrase based on alphabet given
      it('should correctly translate a given phrase based on the provided alphabet', () => {
      const input = 'hello world';
      const customAlphabet = 'phqgiumeaylnofdxjkrcvstzwb';
      const translated = substitution(input, customAlphabet);

      expect(translated).to.equal('einnd tdkng');
    });

//returns false if there are any duplicate characters in given alphabet
it('should return false if given alphabet has duplicate characters', () => {
    const input = 'hello world';
    const invalidAlphabet = 'abcdefghijklmnaopqrstuvwxyz'; 
    const result = substitution(input, invalidAlphabet);
    expect(result).to.be.false;
  });

//maintains spacing, before and after encoding/decoding
    it('should maintain spacing before and after encoding', () => {
      const input = 'hello world';
      const alphabet = 'zyxwvutsrqponmlkjihgfedcba';
      const encoded = substitution(input, alphabet);
      const decoded = substitution(encoded, alphabet, false);

      expect(encoded).to.equal('svool dliow');
      expect(decoded).to.equal(input);
    });

//ignores capital letters
it( "Should ignore capital letters", () => {
    const plainText = substitution.input;
    const shift = substitution.shift;
    
    expect(plainText, shift).not.match(/[A-Z]/);
  });
});
