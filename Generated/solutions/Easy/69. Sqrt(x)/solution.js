"use strict";
/** Newton's method
 * Time complexity: O(log x)
 * Space complexity: O(1)
 */
function mySqrt(x) {
    var resPrev = 1;
    var epsilon = 1;
    var resCurr;
    while (epsilon > 1e-6) {
        resCurr = resPrev + (x - resPrev * resPrev) / (2 * resPrev);
        epsilon = Math.abs(resCurr - resPrev);
        resPrev = resCurr;
    }
    return Math.floor(resPrev);
}
;
/** Binary search
 * Time complexity: O(log x)
 * Space complexity: O(1)
 */
function mySqrtBinarySearch(x) {
    if (x == 0) {
        return 0;
    }
    var left = 0;
    var right = x; // integer
    var ans = x;
    while (left <= right) {
        var mid = Math.floor(left + (right - left) / 2); // integer
        if (mid * mid <= x) {
            ans = mid;
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return ans;
}
;
