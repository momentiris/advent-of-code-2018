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
    
const calculateIntersectionX = (l1, l2) => {
  return (l1.x1 <= l2.x2 && l1.x1 <= l1.x2) ? l1.x2 - l2.x1 : 0
}
const calculateIntersectionY = (l1, l2) => {
  return (l1.y1 <= l2.y2 && l1.y1 <= l1.y2) ? l1.y2 - l2.y1 : 0
}

const alrighty = ({ x, y, w, h }, rest) => {
  const currentX = {x1: x, x2: x+w}
  const currentY = {y1: y, y2: y+h}
  
  return rest.map(({ x: rx, w: rw, y: ry, h: rh}) => {
    const currentOfRestY = {y1: ry, y2: ry+rh}
    const currentOfRestX = {x1: rx, x2: rx+rw}
    return calculateIntersectionX(currentX, currentOfRestX)
  })
  .filter(x => x != 0)





}




const hej = input.reduce((total, claim, i) => {
  const rest = input.slice(i)

  total += alrighty(claim, rest)

  return total
}, 0)

console.log(hej);




// f i already have an array and i want to do the exact same operation on each of the elements in the array and return the same amount of items in the array, use the map.
// If i already have an array but i only want to have items in the array that match certain criteria, use the filter.
// If i already have an array, but i want to use the values in that array to create something completely new, use the reduce.

const line1 = {x1: 50, x2: 250}
const line2 = {x1: 300, x2: 300}





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

