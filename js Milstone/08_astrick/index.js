function printInvertedRightAngleTriangle(i) {
    for (let row = i; row >= 1; row--) {
      let rowPattern = '';
      for (let j = 1; j <= row; j++) {
        rowPattern += '*';
      }
      console.log(rowPattern);
    }
  }
  
  // Example usage:
  const i = 6;
  printInvertedRightAngleTriangle(i);
  