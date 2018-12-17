const fs = require('fs')
const concat = (x,y) =>
  x.concat(y)

Array.prototype.flatMap = (f,xs) =>
  xs.map(f).reduce(concat, [])

const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8')
  .split('\n')
  .map(x => x.split(' ')
    .map(y => 
      y.includes(',') ? 
      y.split(',') : 
      y.includes('x') ? 
      y.split('x') : y
    )
    .reduce(concat, [])
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
        id: parseInt(item[0]),
        x: parseInt(item[1]),
        y: parseInt(item[2]),
        w: parseInt(item[3]),
        h: parseInt(item[4]),
      }
    ], [])


const fabric = 1000
console.log(input);


// const alrighty = ({ x, y, w, h }, rest) => {
//   let collide = 0

//   rest.forEach(({ x: rx, r: ry, w: rw, h: rh }) => {


//   })
//   return collide
// }
// const boxes = [
//   {
//     x: 100,
//     y: 100,
//     w: 100,
//     h: 100,
//   },
//   {
//     x: 50,
//     y: 50,
//     w: 50,
//     h: 50,
//   },
// ]

// const hej  = boxes[0]
// const svej = boxes[1]
// const okok = (hej.w * hej.h)

const doesCollide = (r1, r2) => {
    return !(r2.left > r1.right || 
             r2.right < r1.left || 
             r2.top > r1.bottom ||
             r2.bottom < r1.top);
}


// console.log(doesCollide(hej, svej))

// //  input.reduce((total, claim, i) => {
// //   const rest = input.slice(i)
// //   return total += alrighty(claim, rest)
// // }, 0)
// // console.log(fabric)

