const { readFile, writeFile } = require('fs')

console.log('Start');

readFile('./content/subdir/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return
    }

    const first = result;

    readFile('./content/subdir/second.txt', 'utf8', (err, result) => {
        if(err) {
            return
        }
         
        const second = result;
        
        writeFile('./content/subdir/result-sync.txt', `Here is the result : ${first}, ${second}`, (err, result) => {
            if(err){
                return
            }

            console.log('Done with this task');
        })
    })
})

console.log('Starting another task');