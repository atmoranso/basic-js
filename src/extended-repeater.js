const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    if (typeof str !== 'string') str = `${str}`;
    if (options.hasOwnProperty('addition')) {
        let subString;
        if (typeof options.addition !== 'string') subString = `${options.addition}`;
        else subString = options.addition;
        if (options.hasOwnProperty('additionRepeatTimes')) {
            let tmpStr = subString;
            if (!options.hasOwnProperty('additionSeparator')) options.additionSeparator = '|';

            for (let i = 1; i < options.additionRepeatTimes; i++) {
                subString += options.additionSeparator + tmpStr;
            }
        }
        str += subString;
    }
    if (options.hasOwnProperty('repeatTimes')) {
        let tmpStr = str;
        if (!options.hasOwnProperty('separator')) options.separator = '+';
        for (let i = 1; i < options.repeatTimes; i++) {
            str += options.separator + tmpStr;
        }
    }
    return str;
}

module.exports = {
    repeater,
};
