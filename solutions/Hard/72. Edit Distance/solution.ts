function minDistance(word1: string, word2: string): number {
    let m: number = word1.length;
    let n: number = word2.length;
    
    let dist: number[][] = new Array(m);
    for (let i: number = 0; i < m + 1; i++) {
        dist[i] = new Array(n);
        dist[i][0] = i;
    }
    for (let i: number = 0; i < n + 1; i++) {
        dist[0][i] = i;
    }
    
    for (let i: number = 1; i < m + 1; i++) {
        for (let j: number = 1; j < n + 1; j++) {
            let cost: number = (word1[i - 1] == word2[j - 1]) ? 0 : 1;
            dist[i][j] = Math.min(dist[i - 1][j] + 1, dist[i][j - 1] + 1, dist[i - 1][j - 1] + cost);
        }
    }
    return dist[m][n];
};
