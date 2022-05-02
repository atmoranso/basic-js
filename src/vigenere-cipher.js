const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    lang = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    constructor(isStraight) {
        this.isStraight = isStraight;
    }
    encrypt(str, word) {
        let resStr = '';
        let resNum = [];
        if (str === undefined || word === undefined) throw new Error('Incorrect arguments!');
        str = str.toUpperCase();
        let strArr = str.split('');
        strArr.forEach((el, i) => {
            if (this.lang.indexOf(strArr[i]) == -1) {
                strArr.splice(i, 1);
            }
        });
        let stringLength = strArr.length;
        while (word.length < stringLength) {
            word += word;
        }
        word = word.slice(0, stringLength).toUpperCase();
        for (let i = 0, k = 0; i < str.length; i++) {
            if (this.lang.indexOf(str[i]) >= 0) {
                resNum.push(
                    this.lang.indexOf(str[i]) + this.lang.indexOf(word[k]) >= 26 ? this.lang.indexOf(str[i]) + this.lang.indexOf(word[k]) - 26 : this.lang.indexOf(str[i]) + this.lang.indexOf(word[k])
                );
                k++;
            } else {
                resNum.push(str[i]);
            }
        }

        for (const char of resNum) {
            if (typeof char == 'number') {
                resStr += this.lang[char];
            } else resStr += char;
        }
        if (this.isStraight === false) {
            return resStr.split('').reverse().join('');
        }
        return resStr;
    }
    decrypt(str, word) {
        let resStr = '';
        let resNum = [];
        if (str === undefined || word === undefined) throw new Error('Incorrect arguments!');
        // if (this.isStraight === false) {
        //     str.split('').reverse().join('');
        // }
        str = str.toUpperCase();
        let strArr = str.split('');
        strArr.forEach((el, i) => {
            if (this.lang.indexOf(strArr[i]) == -1) {
                strArr.splice(i, 1);
            }
        });
        let stringLength = strArr.length;
        while (word.length < stringLength) {
            word += word;
        }
        word = word.slice(0, stringLength).toUpperCase();
        for (let i = 0, k = 0; i < str.length; i++) {
            if (this.lang.indexOf(str[i]) >= 0) {
                resNum.push(
                    this.lang.indexOf(str[i]) - this.lang.indexOf(word[k]) < 0 ? this.lang.indexOf(str[i]) - this.lang.indexOf(word[k]) + 26 : this.lang.indexOf(str[i]) - this.lang.indexOf(word[k])
                );
                k++;
            } else {
                resNum.push(str[i]);
            }
        }

        for (const char of resNum) {
            if (typeof char == 'number') {
                resStr += this.lang[char];
            } else resStr += char;
        }

        if (this.isStraight === false) {
            return resStr.split('').reverse().join('');
        }
        return resStr;
    }
}

module.exports = {
    VigenereCipheringMachine,
};
