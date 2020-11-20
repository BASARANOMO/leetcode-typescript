/** Newton's method */
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