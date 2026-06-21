/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
  const maxRight = nums.length - 1;
  let left = 0;
  let right = Math.min(k, maxRight);

  const occurrence = {};

  for (let i = left; i <= right; i++) {
    if (occurrence[nums[i]]) return true;
    occurrence[nums[i]] = true;
  }

  left++;
  right++;

  while (right <= maxRight) {
    occurrence[nums[left - 1]] = false;

    if (occurrence[nums[right]]) return true;
    occurrence[nums[right]] = true;

    left++;
    right++;
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([99, 99], 2));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
