const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let count = 0;
    let s1arr = s1.split('');
    let s2arr = s2.split('');
    for (const symb of s1arr) {
        for (let i = 0; i < s2arr.length; i++) {
            if (symb == s2arr[i]) {
                count++;
                s2arr.splice(i, 1);
                break;
            }
        }
    }
    return count;
}

module.exports = {
    getCommonCharacterCount,
};
