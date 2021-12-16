const input = require('./input.js');

function calculateIncrement() {
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      count;
    } else {
      let sum1 = input[i] + input[i + 1] + input[i + 2];
      let sum2 = input[i - 1] + input[i] + input[i + 1];

      if (sum1 > sum2) {
        count++;
      }
    }
  }
  console.log(count);
  return count;
}

calculateIncrement();
