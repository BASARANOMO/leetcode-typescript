"use strict";
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColorsPointer(nums) {
    var begin = 0;
    var end = nums.length - 1;
    var current = 0;
    while (current <= end) {
        if (nums[current] == 0) {
            var temp = nums[begin];
            nums[begin] = nums[current];
            nums[current] = temp;
            begin += 1;
            current += 1;
        }
        else if (nums[current] == 2) {
            var temp = nums[end];
            nums[end] = nums[current];
            nums[current] = temp;
            end -= 1;
        }
        else {
            current += 1;
        }
    }
}
;
