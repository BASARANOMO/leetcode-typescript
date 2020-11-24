"use strict";
/**
 Do not return anything, modify s in-place instead.
 */
// Naive method
function reverseString(s) {
    s = swap(s, 0, s.length - 1);
}
;
function swap(s, left, right) {
    if (left < right) {
        var temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        s = swap(s, left + 1, right - 1);
    }
    return s;
}
