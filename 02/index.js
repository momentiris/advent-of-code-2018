const fs = require('fs')

const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8')
  .split('\n')
 
// part 1 
const first = input
  .map(x => x.split('')
  .sort()
  .join(''))
  .reduce((acc, val) => {
    const match = val.match(/(.)\1+/g)
    const two = match.filter(x => x.length === 2).length 
    const three = match.filter(x => x.length === 3).length 

    return [
      acc[0] = two ? acc[0] + 1 : acc[0],
      acc[1] = three ? acc[1] + 1 : acc[1],
    ]
  }, [0, 0])
  .reduce((a, b) => a * b)

  console.log(first);


// part 2
const findPlease = (input) => {
  let hit
  splitInput.forEach((line, i) => {    
    splitInput.slice(i).forEach((sl, si) => {
      if(sl.filter((slsl, sisi) => slsl === line[sisi]).length === 25) {
        hit = [line, sl]
      }
    })
  })
  console.log(hit);
}

const splitInput = input.map(x => x.split(''))
findPlease(splitInput)















  // const firstCount = counter(input).map(row => {

  //    Object.entries(row).filter(x => x[1] > 1).forEach(x => {
  //      console.log(x);
       
  //    })


            
    
        


  //   // .forEach(y => {
  //   //       y.forEach(z => {
  //   //           console.log(z);
  //   //       })
  //   //       return sum
  //   //     })
  //   // return sum

  // })

  

  


  
    
    
   