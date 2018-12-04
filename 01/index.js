const fs = require('fs')
const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8')
  .split('\n')
  .map(Number)

//part 1
const reducer = input.reduce((a,b) => a + b)
console.log(reducer);

//part 2
const firstHit = () => {
  const seen = {};
  let freq = 0;

  while (true) {
    for (const i of input) {
      freq += i;
      if (seen[freq]) {
        return freq;
      }
      seen[freq] = true;
    }
  }
};

console.log(firstHit());
  