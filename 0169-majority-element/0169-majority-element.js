/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var element = nums[0];
    let count = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === element) {
            count++;
        }else{
            count--;
            if (count === 0) {
                element = nums[i];
                count = 1;
            }
        };
    }
    return element;
};