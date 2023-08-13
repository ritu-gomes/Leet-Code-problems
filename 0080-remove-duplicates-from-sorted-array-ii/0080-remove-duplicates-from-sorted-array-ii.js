/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var n = nums.length;
    var k = 2;
    if(n<=2){
        return k;
    }
    for(let i=2; i<=n-1; i++){
        if (nums[i] !== nums[k-2]) {
            nums[k] = nums[i];
            k++;  
        }
    }
    return k;
};