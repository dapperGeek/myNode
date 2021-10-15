const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/subdirectory/result-sync.txt', `Here is the result, ${first}, ${second} `, 'utf8', {flag : 'a'})

console.log('Done with this task')

