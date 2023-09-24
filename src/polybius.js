// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const polybiusModule = (function () {
  const alphabet = {
    A: 11, B: 21, C: 31, D: 41, E: 51,
    F: 12, G: 22, H: 32, I: 42, J: 42,
    K: 52, L: 13, M: 23, N: 33, O: 43,
    P: 53, Q: 14, R: 24, S: 34, T: 44,
    U: 54, V: 15, W: 25, X: 35, Y: 45,
    Z: 55,
  };

  function encodeChar(char) {
    if (char === ' ') return ' ';
    const upperChar = char.toUpperCase();
    return String(alphabet[upperChar] || char);
  }

  function decodePair(pair) {
    if (pair === ' ') return ' ';  // Handle spaces

    const code = parseInt(pair, 10);
    // Modify to handle both 'i' and 'j' as '42'
    if (code === 42) {
      return '(I/J)';
    }

    for (const [char, value] of Object.entries(alphabet)) {
      if (value === code) {
        return char;
      }
    }
    return false;
  }

  function polybius(input, encode = true) {
    if (encode) {
      return input
        .toUpperCase()  // Convert input to uppercase before encoding
        .split('')
        .map(char => encodeChar(char))
        .join('');
    } else {
      const sanitizedInput = input.replace(' ', '');
      if (sanitizedInput.length % 2 !== 0) return false;

      const decodedChars = [];
      let i = 0;
      for (let j = 0; j < input.length; j++) {
        if (input[j] === ' ') {
          decodedChars.push(' ');
        } else {
          const pair = input.substr(j, 2);
          if (pair === '(I/J)') {
            decodedChars.push('I/J');
            j += 5; // Move to the next non-space character
          } else {
            decodedChars.push(decodePair(pair));
            j++;
          }
        }
      }

      return decodedChars.join('').toLowerCase();
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
