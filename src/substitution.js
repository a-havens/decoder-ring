// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // Check if the alphabet is valid
    if (!alphabet || alphabet.length !== 26) return false;

    const uniqueChars = new Set(alphabet);
    if (uniqueChars.size !== 26) return false;

    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const transformedInput = input.toLowerCase().split('').map((char) => {
      if (char === ' ') return char;

      const index = encode ? standardAlphabet.indexOf(char) : alphabet.indexOf(char);
      if (index !== -1) {
        return encode ? alphabet[index] : standardAlphabet[index];
      } else {
        return char; // Preserve characters other than letters
      }
    });

    return transformedInput.join('');
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
