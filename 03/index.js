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


const fabric = 1000

const alrighty = ({ x, y, w, h }, rest) => {
  let collide = 0

  rest.forEach(({ x: rx, r: ry, w: rw, h: rh }) => {


  })
  return collide
}
const boxes = [
  {
    x: 100,
    y: 100,
    w: 100,
    h: 100,
  },
  {
    x: 50,
    y: 50,
    w: 50,
    h: 50,
  },
]

const hej  = boxes[0]
const svej = boxes[1]
const okok = (hej.w * hej.h)

const doesCollide = (r1, r2) => {
    return !(r2.left > r1.right || 
             r2.right < r1.left || 
             r2.top > r1.bottom ||
             r2.bottom < r1.top);
}


console.log(doesCollide(hej, svej))

//  input.reduce((total, claim, i) => {
//   const rest = input.slice(i)
//   return total += alrighty(claim, rest)
// }, 0)
// console.log(fabric)


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

