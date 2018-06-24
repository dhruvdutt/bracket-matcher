const {
    isEmpty,
    isOpeningBracket,
    isClosingBracket,
    getOpeningBracket,
} = require('./utils');

/**
 * Check for invalid brackets
 *
 * @param {String} input Input string containing brackets
 * @param {Boolean} getChar Get invalid bracket instead of index
 *
 * @return {Number | String} index of the invalid bracket
 */
function checkBrackets(input, getChar = false) {
    const arr = [];

    let foundInvalid = false;
    let invalidIndex = null;

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (isOpeningBracket(char)) {
            arr.push(char);
        } else if (isClosingBracket(char)) {
            if (isEmpty(arr)) {
            foundInvalid = true;
            invalidIndex = i;
            break;
            } else {
                const prevOpen = arr.pop();
                const currentOpen = getOpeningBracket(char);
                if (currentOpen !== prevOpen) {
                    foundInvalid = true;
                    invalidIndex = i;
                    break;
                }
            }
        }
    }

    if (!isEmpty(arr) && !foundInvalid) {
        invalidIndex = input.indexOf(arr[0]);
    }

    if (getChar) {
        return invalidIndex === null ? null : input[invalidIndex];
    }

    return invalidIndex;
}

module.exports = checkBrackets;
