/**
 Do not return anything, modify s in-place instead.
 */

 // Naive method
function reverseString(s: string[]): void {
    s = swap(s, 0, s.length-1);
};

function swap(s: string[], left: number, right: number): string[] {
    if (left < right) {
        let temp: string = s[left];
        s[left] = s[right];
        s[right] = temp;
        s = swap(s, left+1, right-1);
    }
    return s;
}