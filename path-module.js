const path = require('path')

console.log(path.sep);

const filePath = path.join('/content/', 'subdir', 'first.txt' )
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subdir', 'first.txt')
console.log(absolute);