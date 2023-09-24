// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25 || shift === undefined) {
      return false;
    }

    return input
      .split('')
      .map(char => {
        const isAlphabetic = /[a-zA-Z]/.test(char);
        if (!isAlphabetic) return char;

        const isUpperCase = char === char.toUpperCase();
        char = char.toLowerCase();

        let index = alphabet.indexOf(char);

        // Apply shift based on the 'encode' flag
        if (!encode) {
          index -= shift;
        } else {
          index += shift;
        }

        // Handle wrap around for positive shifts
        if (index >= alphabet.length) {
          index %= alphabet.length;
        }

        // Handle wrap around for negative shifts
        if (index < 0) {
          index = alphabet.length + (index % alphabet.length);
        }

        let resultChar = alphabet[index];

        // Restore case if the original character was uppercase
        if (isUpperCase) {
          resultChar = resultChar.toUpperCase();
        }

        return resultChar;
      })
      .join('')
      .toLowerCase(); // Convert the result to lowercase after joining
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };