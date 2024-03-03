const http = require('http')

const server = http.createServer((req, res)=>{
    const url = req.url
    if (url== '/home'){
        res.write('<html><head><title>Home Page</title></head><body><h1> Welcome to Home Page</body></html>');
        res.end();
    }
    if (url== '/about'){
        res.write('<html><head><title> About Us</title></head><body><h1> Welcome to About Us page</body></html>');
        res.end();
    }
    if (url== '/node'){
        res.write('<html><head><title>Node Js </title></head><body><h1> Welcome to my Node Js project</body></html>');
        res.end();
    }

})

server.listen(4000);