const fs = require('fs')

const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8')
  .split('\n').map(x => x.split(''))

const instances = 
  input.map(row => {
    
  const hits = {}
  return row.reduce((obj, letter) => {
    if (!obj[letter]) {
      obj[letter] = 0;
    }
    obj[letter]++
    return obj;
  }, hits)
})

















  





