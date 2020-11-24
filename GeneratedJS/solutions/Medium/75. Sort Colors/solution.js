"use strict";
/**
 Do not return anything, modify nums in-place instead.

 Very straight forward solution with counting sort
 */
function sortColors(nums) {
    Object.assign(nums, countingSort(nums));
}
;
function countingSort(nums) {
    var newNums = [];
    Object.assign(newNums, nums);
    var maxVal = Math.max.apply(Math, nums);
    var minVal = Math.min.apply(Math, nums);
    var count = [];
    for (var i = minVal; i <= maxVal; i++) {
        count.push(0);
    }
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        count[num - minVal] += 1;
    }
    for (var i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }
    for (var i = nums.length - 1; i >= 0; --i) {
        newNums[--count[nums[i] - minVal]] = nums[i];
    }
    return newNums;
}
