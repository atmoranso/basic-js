const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str == '') return str;
    let newStr = '';
    let symbol = str[0];
    let count = 1;
    for (let i = 1; i <= str.length; i++) {
        if (i == str.length) {
            if (count > 1) newStr += count + symbol;
            else newStr += symbol;
            return newStr;
        }
        if (str[i] == symbol) count++;
        else {
            if (count > 1) newStr += count + symbol;
            else newStr += symbol;
            symbol = str[i];
            count = 1;
        }
    }
}

module.exports = {
    encodeLine,
};
