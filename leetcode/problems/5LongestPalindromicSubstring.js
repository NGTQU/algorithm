/**
 * @param {string} s
 * @return {string}
 */

const longestPalindrome = (s) => {
    let res = '';
    let substring = '';

    for (let j = 0; j < s.length; j++) {
        for (let k = j; k < s.length; k++) {
            substring = s.slice(j, k);
            if (isPalindrome(substring) && res.length < substring.length) {
                res = substring;
            }
        }
    }
    return res;
};

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    const lastIndex = s.length - 1;
    const middleIndex = Math.round(s.length/2) - 1;
    for (let i = 0; i <= middleIndex; i++) {
        if (s[i] === s[lastIndex-i]) {
            if (i === middleIndex) {
                return true;
            }
        } else {
            return false;
        }
    }
}

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('a'));