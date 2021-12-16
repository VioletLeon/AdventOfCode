const input = require('./input.js');

function calculateIncrement() {
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      count;
    } else {
      if (input[i] > input[i - 1]) {
        count++;
      }
    }
  }
  console.log(count);
  return count;
}

calculateIncrement();
