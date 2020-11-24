/** Newton's method
 * Time complexity: O(log x)
 * Space complexity: O(1)
 */
function mySqrt(x: number): number {
    let resPrev: number = 1;
    let epsilon: number = 1;
    let resCurr: number;
    while (epsilon > 1e-6) {
        resCurr = resPrev + (x - resPrev * resPrev) / (2 * resPrev);
        epsilon = Math.abs(resCurr - resPrev);
        resPrev = resCurr;
    }
    return Math.floor(resPrev);
};

/** Binary search
 * Time complexity: O(log x)
 * Space complexity: O(1)
 */
function mySqrtBinarySearch(x: number): number {
    if (x == 0) {
        return 0;
    }
    let left: number = 0;
    let right: number = x;  // integer
    let ans: number = x;
    while (left <= right) {
        let mid: number = Math.floor(left + (right - left)/2);  // integer
        if (mid * mid <= x) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
};