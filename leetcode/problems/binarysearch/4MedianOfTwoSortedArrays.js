/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  let nums;
  if (nums1.length === 0) {
    nums = nums2;
  } else if (nums2.length === 0) {
    nums = nums1;
  } else {
    for (let i = 0; i < nums2.length; i++) {
      const searchedI = search(nums2[i], nums1);
      nums1.splice(searchedI, 0, nums2[i]);
    }
    nums = nums1;
  }

  if (nums.length % 2 === 0) {
    const left = nums.length / 2 - 1;
    const right = left + 1;
    return (nums[left] + nums[right]) / 2;
  }
  const index = Math.floor(nums.length / 2);
  return nums[index];
};

const search = (num, nums) => {
  let left = 0;
  let right = nums.length - 1;
  let i = Math.round((left + right) / 2);

  while (i !== right) {
    if (nums[i] < num) {
      left = i;
    } else {
      right = i;
    }
    i = Math.round((left + right) / 2);
  }

  if (num <= nums[i] && num >= nums[i - 1]) {
    return i;
  } else if (num > nums[i]) {
    return i + 1;
  }
  return i - 1;
};

console.log(
  findMedianSortedArrays(
    [1, 1, 2, 2, 2, 3],
    [0, 0, 1, 2, 2, 3, 3, 3, 3, 4, 5, 5, 6]
  )
);
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([], [1]));
console.log(findMedianSortedArrays([3], [-2, -1]));
console.log(findMedianSortedArrays([2, 2, 4, 4], [2, 2, 2, 4, 4]));
