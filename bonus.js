/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let ans = [];
    let j = 0;
    for (let i = 1; i <= arr.length + k; i++) {
        if (arr[j] !== i && j < arr.length) {
            ans.push(i);
            continue;
        } else if (j >= arr.length) ans.push(i);
        j++;
    }
    return ans[k - 1];
};