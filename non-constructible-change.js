/*
QUESTION: Given an array of non-zero positive integers representing coin values (cents),
find the minimum amount of change that CANNOT be created.

Sample:
[1, 2, 5] => returns 4 as the answer.

Explanation: We can make a 1cent change, a 2 cents change, a 3 cents change (1 + 2) but we can't make a 4 cents change
because we can't combine any of the numbers to achieve that.
*/

// O(n log(n)) time and O(1) space
function findMinNonConstructibleChange(coins) {
      coins.sort((a, b) => a - b);
      let change = 0;

      for (let coin of coins) {
            if ((change + 1) < coin) {
                  return change + 1;
            }

            change = change + coin;
      }

      return change + 1;
}

console.log(findMinNonConstructibleChange([1, 2, 5]));