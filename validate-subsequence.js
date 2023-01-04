/*
QUESTION: Given two non-empty arrays, determine whether or not the second array 
is a valid sub-sequence of the first array.
*/


// O(n) time and O(1) space
const validateSubsequenceWithWhileLoop = (mainArray, subArray) => {
	let mainPointer = 0;
	let subPointer = 0;

	while (mainPointer < mainArray.length && subPointer < subArray.length) {
		let currentElementInMainArray = mainArray[mainPointer];
		let currentElementInSubArray = subArray[subPointer];

		if (currentElementInMainArray === currentElementInSubArray) {
			subPointer++;
		}

		mainPointer++;
	}

	return subPointer === subArray.length;
};


// O(n) time and O(1) space
const validateSubSequenceWithForLoop = (mainArray, subArray) => {
      let subPointer = 0;

      for (let i = 0; i < mainArray.length; i++) {
            let currentElementInMainArray = mainArray[mainPointer];
		let currentElementInSubArray = subArray[subPointer];

            if (subPointer === subArray.length) {
                  return true;
            }

            if (currentElementInMainArray === currentElementInSubArray) {
                  subPointer++;
            }
      }

	return false;
}