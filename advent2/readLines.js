const { readFileSync } = require('fs');

function getData() {
  var array = readFileSync('./input.txt', 'utf8').split('\r\n');
  return array;
}

function findCoordinate() {
  let x = 0;
  let y = 0;
  let depth = 0;
  let tempForward = 0;
  let hasGoneDown = false;

  let arrayData = getData();
  arrayData.map((string) => {
    const stringSplit = string.split(' ');
    const int = parseInt(stringSplit[1]);
    if (string.includes('forward')) {
      x = x + int;
      tempForward = tempForward + int;

      if (hasGoneDown === true) {
        console.log(tempForward, y);
        hasGoneDown = false;
        depth = depth + tempForward * y;
        tempForward = 0;
        console.log(depth);
      }
    } else if (string.includes('down')) {
      y = y + int;
      hasGoneDown = true;
    } else if (string.includes('up')) {
      y = y - int;
      hasGoneDown = true;
    }
  });

  const commands = readFileSync('./input.txt')
    .toString()
    .split('\n')
    .map((l) => l.split(/\s+/))
    .map((c) => [c[0], parseInt(c[1], 10)]);

  let aim = 0;
  depth = 0;
  position = 0;

  for (const command of commands) {
    const [direction, value] = command;

    switch (direction) {
      case 'forward':
        position += value;
        depth += aim * value;
        break;
      case 'up':
        aim -= value;
        break;
      case 'down':
        aim += value;
        break;
      default:
        console.log('unknown command', command);
    }
  }

  console.log('result:', position * depth);
}

findCoordinate();
