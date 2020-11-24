"use strict";
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColorsOnePass(nums) {
    var red = -1;
    var white = -1;
    var blue = -1;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            nums[++blue] = 2;
            nums[++white] = 1;
            nums[++red] = 0;
        }
        else if (nums[i] == 1) {
            nums[++blue] = 2;
            nums[++white] = 1;
        }
        else {
            nums[++blue] = 2;
        }
    }
}
;
