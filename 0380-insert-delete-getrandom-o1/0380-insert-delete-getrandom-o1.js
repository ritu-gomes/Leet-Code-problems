
var RandomizedSet = function() {
    this.nums = [];
    this.pair = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.pair.get(val) !== undefined) return false;
    else {
        var len = this.nums.length;
        this.nums.push(val);
        this.pair.set(val,len);
        return true;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    const index = this.pair.get(val);
    if(index === undefined) return false;
    else{
        const len = this.nums.length;
        const lastNum = this.nums[len - 1];
        this.nums[index] = lastNum
        this.nums[len - 1] = val
        this.nums.pop()

        this.pair.set(lastNum, index)
        this.pair.delete(val)
        return true
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const index = Math.floor(Math.random() * this.nums.length)
    return this.nums[index];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */