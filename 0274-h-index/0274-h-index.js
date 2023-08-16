/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => b - a); // Sort the citations array in descending order

    let hIndex = 0;
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            hIndex = i + 1;
        } else {
            break;
        }
    }

    return hIndex;
};