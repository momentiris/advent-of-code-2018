const fs = require('fs')
const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8')
  .split('\n')

const timestampRx = '[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]'

const sorted = input.map(
  row => ([
    row.substr(1, 16),
    row.substr(18, row.length)
  ]))
  .sort((a, b) => a[0] > b[0] ? 1 : -1)
  .map(x => x.join('').replace('#', ''))

// find guard with most minutes slept
// find how many days guard slept
// find the most recurring minute of those minutes over all of the days



// let matchId
// let guardIds = []
// const ok = sorted.reduce((obj, row, i) => {
//   const guardText = row.match(/Guard/)
//   const guardId = guardText && row.split(' ')[3]
//   if(guardText && obj[guardId]) {

//   }
  
//   if(guardText) {

//     matchId = row.split(' ')[3]
//     guardIds.push(matchId)
//     obj[matchId] = obj[matchId] || []
//   } 

//   if(!guardText) {
//     obj[matchId] = [...obj[matchId], row]
//   }
  

  
//   return obj
  
// }, {})



console.log(Object.keys(ok).length);

const bajs = guardIds.reduce((obj, inst) => {
  if (!obj[inst]) obj[inst] = 0
  obj[inst] ++
  return obj
}, {})


let matchId

const lala = sorted.reduce((obj, inst, i) => {
  const guardText = row.match(/Guard/)
  const guardId = guardText && row.split(' ')[3]
  if (guardText) {
    const hasId = Object.keys(obj).find(x => x === guardId)
    if (hasId) {
      matchId = guardId

    }
  }
  
  if(guardText) {

    matchId = row.split(' ')[3]
    guardIds.push(matchId)
    obj[matchId] = obj[matchId] || []
  } 

  if(!guardText) {
    obj[matchId] = [...obj[matchId], row]
  }
  

  
  return obj
}, {})
