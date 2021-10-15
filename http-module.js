const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req);
    
    if(req.url === '/'){
        res.end('Welcome to the home page')
    }
    
    if(req.url === '/about'){
        res.end('Here is our brief history')
    }

    res.end(`<h1>Oops!</h1>
        <p>We can't seem to find the page requested</p>
        <a href="/">Return to Home page</a>
    `)
})

server.listen(5000)