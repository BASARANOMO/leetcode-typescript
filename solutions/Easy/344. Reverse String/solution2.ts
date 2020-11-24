/**
 Do not return anything, modify s in-place instead.
 Two pointers example
 */
function reverseString2(s: string[]): void {
    let left:number = 0;
    let right: number = s.length-1;
    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left += 1;
        right -= 1;
    }
};