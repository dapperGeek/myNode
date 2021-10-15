const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/subdir/first.txt')
const second = readFileSync('./content/subdir/second.txt')

// console.log(first, second);

writeFileSync('./content/subdir/result-sync.txt', `Here is the result , ${first}, ${second}`, {flag : 'a'})
