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
}