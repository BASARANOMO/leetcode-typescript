/**
 Do not return anything, modify nums in-place instead.
 */
function sortColorsOnePass(nums: number[]): void {
    let red: number = -1;
    let white: number = -1;
    let blue: number = -1;
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            nums[++blue] = 2;
            nums[++white] = 1;
            nums[++red] = 0;
        } else if (nums[i] == 1) {
            nums[++blue] = 2;
            nums[++white] = 1;
        } else {
            nums[++blue] = 2;
        }
    }
};
