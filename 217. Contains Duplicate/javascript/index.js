// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
    const set = new Set();
    for(let n = 0 ; n < nums.length; n++) {
        if(set.has(nums[n])) return true;
        set.add(nums[n]);
    }
    return false;
};