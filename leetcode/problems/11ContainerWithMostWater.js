/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    let left = 0;
    let right = height.length - 1;
    for (let i = left + 1; i < right; i++) {
        if ((height[i] - height[left]) > (i - left)) {
            left = i;
        }
    }
    for (let j = right - 1; j > left; j--) {
        if ((height[j] - height[right]) > (right - j)) {
            right = j;
        }
    }
    return Math.min(height[left], height[right]) * (right - left);
};

console.log(maxArea([1,2,4,3]));