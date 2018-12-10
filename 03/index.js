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

console.log(input);


// f i already have an array and i want to do the exact same operation on each of the elements in the array and return the same amount of items in the array, use the map.
// If i already have an array but i only want to have items in the array that match certain criteria, use the filter.
// If i already have an array, but i want to use the values in that array to create something completely new, use the reduce.



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
  // console.log(animal);
  return total + animal.weight
},0)

