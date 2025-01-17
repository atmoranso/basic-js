const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let stats = {};
    for (const domain of domains) {
        let domainArr = domain.split('.').reverse();
        let newArrDomain = [];
        let currDomain = '.';
        for (const dns of domainArr) {
            currDomain += dns;
            if (stats.hasOwnProperty(currDomain)) {
                stats[currDomain]++;
            } else stats[currDomain] = 1;
            currDomain += '.';
        }
    }
    return stats;
}

module.exports = {
    getDNSStats,
};
