const { readFileSync } = require('fs');

function getData() {
  var array = readFileSync('./input.txt', 'utf8').split('\r\n');
  return array;
}

function findCoordinate() {
  let x = 0;
  let y = 0;

  let arrayData = getData();
  arrayData.map((string) => {
    const stringSplit = string.split(' ');
    const int = parseInt(stringSplit[1]);
    console.log(int);
    if (string.includes('forward')) {
      x = x + int;
    } else if (string.includes('down')) {
      y = y + int;
    } else if (string.includes('up')) {
      y = y - int;
    }
  });

  console.log(x, y);
  console.log(x * y);
}

findCoordinate();
