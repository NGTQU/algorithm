/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    const maxs = [];
    const countMap = nums.reduce((map, curr) => {
        if (!map[curr]) {
            return {...map, [curr] : 1};
        }
        map[curr] = map[curr] + 1;
        return map;
    }, {});
    
    debugger;
};

const nums = [1,1,1,2,2,3];
const k = 2;
console.log(topKFrequent(nums, k));
