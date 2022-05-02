const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (!names[0]) return names;
    let namesCount = new Array(names.length);
    let resArr = [];
    for (let i = 0; i < namesCount.length; i++) {
        namesCount[i] = 0;
    }
    resArr.push(names[0]);

    for (let i = 1; i < names.length; i++) {
        if (names.lastIndexOf(names[i], i - 1) >= 0) {
            let elemFirstIndex = names.indexOf(names[i]);

            namesCount[elemFirstIndex]++;
            resArr.push(names[i] + `(${namesCount[elemFirstIndex]})`);
        } else {
            if (resArr.indexOf(names[i]) >= 0) {
                let elemFirstIndex = names.indexOf(names[i]);
                namesCount[elemFirstIndex]++;
                resArr.push(names[i] + `(${namesCount[elemFirstIndex]})`);
            } else resArr.push(names[i]);
        }
    }

    return resArr;
}

module.exports = {
    renameFiles,
};
