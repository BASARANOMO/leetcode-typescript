/** Newton's method
 * Time complexity: O(mn)
 * Space complexity: O(mn)
 */

function minPathSum(grid: number[][]): number {
    let dp: number[][] = [[]];
    dp[0].push(grid[0][0]);
    
    for (let i=1; i<grid[0].length; i++) {
        dp[0].push(dp[0][i-1] + grid[0][i]);
    }
    
    for (let i=1; i<grid.length; i++) {
        dp.push([]);
        dp[i].push(dp[i-1][0] + grid[i][0]);
    }
    
    for (let i=1; i<grid.length; i++) {
        for (let j=1; j<grid[0].length; j++) {
            dp[i].push(grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1]));
        }
    }
    
    return dp[grid.length-1][grid[0].length-1];
};