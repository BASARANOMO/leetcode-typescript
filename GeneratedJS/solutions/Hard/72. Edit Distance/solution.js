"use strict";
function minDistance(word1, word2) {
    var m = word1.length;
    var n = word2.length;
    var dist = new Array(m);
    for (var i = 0; i < m + 1; i++) {
        dist[i] = new Array(n);
        dist[i][0] = i;
    }
    for (var i = 0; i < n + 1; i++) {
        dist[0][i] = i;
    }
    for (var i = 1; i < m + 1; i++) {
        for (var j = 1; j < n + 1; j++) {
            var cost = (word1[i - 1] == word2[j - 1]) ? 0 : 1;
            dist[i][j] = Math.min(dist[i - 1][j] + 1, dist[i][j - 1] + 1, dist[i - 1][j - 1] + cost);
        }
    }
    return dist[m][n];
}
;
