const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    let newArr = [];
    let needTransform = '';
    let discarded = false;
    for (let i = 0; i < arr.length; i++) {
        if (needTransform == '--discard-next') {
            needTransform = '';
            discarded = true;
            continue;
        }
        if (needTransform == '--discard-prev') {
            if (!discarded) {
                newArr.pop();
            }
            needTransform = '';
        }
        if (needTransform == '--double-next') {
            newArr.push(arr[i]);
            needTransform = '';
        }
        if (needTransform == '--double-prev') {
            if (typeof arr[i - 2] !== 'string' && arr[i - 2]) {
              if (!discarded) {
                newArr.push(arr[i - 2]);
            }

            }
            needTransform = '';
        }
        if (arr[i] == '--discard-next' || arr[i] == '--discard-prev' || arr[i] == '--double-next' || arr[i] == '--double-prev') {
            needTransform = arr[i];
            continue;
        }
        newArr.push(arr[i]);
        discarded = false;
    }

    return newArr;
}

module.exports = {
    transform,
};
