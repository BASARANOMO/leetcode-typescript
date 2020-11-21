var res: number[][] = [];

function combinationSum(candidates: number[], target: number): number[][] {
    res = [];
    candidates.sort();
    backtracking([], candidates, target, 0);
    return res;
}

function backtracking(path: number[], candidates: number[], target: number, pos: number): void {
    if (target < 0) {
        return;
    } else if (target === 0) {
        res.push(path);
    } else {
        for (let i = pos; i < candidates.length; i++) {
            path.push(candidates[i]);
            // note, it's important we spread path (make a copy of it)
            // so that all calls in recursion tree aren't modifying same array
            backtracking([...path], candidates, target - candidates[i], i);
            path.splice(-1, 1);
        }
    }
}
