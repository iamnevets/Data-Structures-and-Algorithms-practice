const sortedSquaredArray = (array) => {
      let left = 0;
      let right = array.length - 1;
      let returnArray = Array(array.length);

      for (let i = array.length - 1; i >= 0; i--) {
            currentLeftValue = array[left];
            currentRightValue = array[right];

            if (Math.abs(currentLeftValue) > Math.abs(currentRightValue)) {
                  returnArray[i] = currentLeftValue * currentLeftValue;
                  left++;
            } else {
                  returnArray[i] = currentRightValue * currentRightValue;
                  right--;
            }
      }

      return returnArray;
}
