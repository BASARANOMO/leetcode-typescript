// in place

/** Newton's method
 * Time complexity: O(mn)
 * Space complexity: O(1)
 */

function minPathSumInPlace(grid: number[][]): number {
    for (let i=1; i<grid[0].length; i++) {
        grid[0][i] += grid[0][i-1];
    }
    
    for (let i=1; i<grid.length; i++) {
        grid[i][0] += grid[i-1][0];
    }
    
    for (let i=1; i<grid.length; i++) {
        for (let j=1; j<grid[0].length; j++) {
            grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
        }
    }
    
    return grid[grid.length-1][grid[0].length-1];
};