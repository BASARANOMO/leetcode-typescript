/**
 Do not return anything, modify nums in-place instead.
 */
function sortColorsPointer(nums: number[]): void {
    let begin: number = 0;
    let end: number = nums.length - 1;
    let current: number = 0;
    while (current <= end) {
        if (nums[current] == 0) {
            const temp: number = nums[begin];
            nums[begin] = nums[current];
            nums[current] = temp;
            begin += 1;
            current += 1;
        } else if (nums[current] == 2) {
            const temp: number = nums[end];
            nums[end] = nums[current];
            nums[current] = temp;
            end -= 1;
        } else {
            current += 1;
        }
    }
};