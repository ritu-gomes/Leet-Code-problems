/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
     var n = nums.length;
    var index = 0;

    for(let i=0; i<=n-1; i++){
        if (nums[i] != nums[i-1]) {
            nums[index] = nums[i];
            index++;  
        }
    }
    nums = nums.slice(0,index);
    return index;
};