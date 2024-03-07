const fs= require('fs');


function requestHandler(req , res){
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        fs.readFile("message.txt" , {encoding: 'utf-8'}, (err, data)=>{
            if(err){
                console.log(err)
            }
            console.log('data from file'+data);
            res.write('<html>');
            res.write('<head><title>enter message</title></head>');
            res.write(`<h2>${data}</h2>`)
            res.write('<body><h2></h2><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
        });
    }
    if(url === '/message' && method === 'POST'){
        const body =[];
        req.on( 'data', (chunk)=>{
            console.log(chunk)
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedbody = Buffer.concat(body).toString();
            const message  = parsedbody.split('=')[1];
            fs.writeFile('message.txt', message , (err)=>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title>MY first page</title></head>');
    // res.write('<body><h1> Hello from nodejs</h1></body>');
    // res.write('</html>');
    // res.end();
}

// module.exports = requestHandler

//module.exports={
//     handler: requestHandler
//     sometext: 'some text'
// }

exports.handler = requestHandler;
exports.someText = 'some text'