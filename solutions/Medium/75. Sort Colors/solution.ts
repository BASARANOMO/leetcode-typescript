/**
 Do not return anything, modify nums in-place instead.

 Very straight forward solution with counting sort
 */
function sortColors(nums: number[]): void {
    Object.assign(nums, countingSort(nums));
};

function countingSort(nums: number[]): number[] {
    let newNums: number[] = [];
    Object.assign(newNums, nums);
    let maxVal: number = Math.max(...nums);
    let minVal: number = Math.min(...nums);
    let count: number[] = [];
    
    for (let i: number=minVal; i<=maxVal; i++) {
        count.push(0);
    }
    
    for (let num of nums) {
        count[num - minVal] += 1;
    }
    
    for (let i: number=1; i<count.length; i++) {
        count[i] += count[i-1];
    }

    for (let i: number=nums.length-1; i>=0; --i) {
        newNums[--count[nums[i] - minVal]] = nums[i];
    }

    return newNums;
}

declare interface ObjectConstructor {
    assign(...objects: Object[]): Object;
}