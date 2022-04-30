const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
    let count = matrix.reduce((sum, item) => {
        return (
            sum +
            item.reduce((sum, item) => {

                if (item === '^^') return ++sum;
                else return sum;
            }, 0)
        );
    }, 0);
    return count;
}

module.exports = {
    countCats,
};
