const fs = require('fs')

const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8')
  .split('\n')
  .map(x => x.split(' ')
    .flatMap(y => 
      y.includes(',') ? 
      y.split(',') : 
      y.includes('x') ? 
      y.split('x') : y
    )
    .map(z => z.includes(':') ? 
      z.replace(':', '') : 
      z.includes('#') ? 
      z.replace('#', '') : z
    )
    .filter(y => y !== '@')
  )
  .reduce((obj, item, i) =>     
   [
    ...obj,
    {
      id: item[0],
      x: item[1],
      y: item[2],
      w: item[3],
      h: item[4],
    }
    ], [])

// console.log(input);

const animals = [
  {
      "name": "cat",
      "size": "small",
      "weight": 5
  },
  {
      "name": "dog",
      "size": "small",
      "weight": 10
  },
  {
      "name": "lion",
      "size": "medium",
      "weight": 150
  },
  {
      "name": "elephant",
      "size": "big",
      "weight": 5000
  }
]

const weights = animals.reduce((total, animal) => {
  console.log(animal);
  return total + animal.weight
},0)

