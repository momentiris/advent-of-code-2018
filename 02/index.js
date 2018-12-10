const fs = require('fs')

const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8')
  .split('\n').map(x => x.split(''))

const counter = data => 
  data.map(row => 
    row.reduce((obj, l) => {
      if (!obj[l]) obj[l] = 0;
      obj[l]++

      return obj
    }, {})
  )
let twos = 0
let threes = 0

const test = [
  ...counter(input)
]

const hej = test.forEach(inst => {
  const ok = {}
  Object.inst.reduce((obj, x) => {
    console.log(obj);
    
    return obj
  }, ok)
  
})




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

  

  


  
    
    
   