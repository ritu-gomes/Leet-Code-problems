/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var n = nums.length;
    var k = 0;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] === val) {
            k++;
            nums.splice(index,1);
            index--;
        }
    }
};