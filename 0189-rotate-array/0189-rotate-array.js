/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    k %= n;
    
    const rotatedPart = nums.splice(n - k);
    nums.unshift(...rotatedPart);
    return nums;
};