/*
QUESTION: Given an array of distinct integer values and a target sum, 
find two numbers in the array that sums up to the target sum.
*/




// O(n^2) time and O(1) space
const getSumWithTwoForLoops = (arr, targetSum) => {
      for (let i = 0; i < arr.length - 1; i++) {
            const firstNum = arr[i];
            
            for (let j = i + 1; j < arr.length; j++) {
                  const secondNum = arr[j];
      
                  if (firstNum + secondNum === targetSum) {
                        return [firstNum, secondNum];
                  }
            }
      }

      return [];
}


// O(n) time and O(n) space
const getSumWithHashTable = (arr, targetSum) => {
      let myHashTable = {};

      for (let i = 0; i < arr.length; i++) {
            let currentNumber = arr[i];
            let potentialMatch = targetSum - currentNumber;
            
            if (myHashTable.hasOwnProperty(potentialMatch)) {
                  return [currentNumber, potentialMatch];
            } else {
                  myHashTable[currentNumber] = true;
            }
      }

      return [];
}


// O(n Log(n)) time and O(1) space
const getSumWithTwoPointers = (arr, targetSum) => {
      arr.sort((a, b) => a - b);

      let left = 0;
      let right = arr.length - 1;

      while (left < right) {
            let currentSum = arr[left] + arr[right];

            if (currentSum === targetSum) {
                  return [arr[left], arr[right]];
            } else if (currentSum < targetSum) {
                  left = left + 1;
            } else if (currentSum > targetSum) {
                  right = right - 1;
            }
      }

      return [];
}