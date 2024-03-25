const http = require('http');

const express = require('express');

const app = express()

app.use((req,res,next)=>{
    console.log('In the middle ware ')
    next(); // allows the request to cintinue to the next middleware in line
})
app.use((req,res,next)=>{
    console.log('In the another middle ware ')
    res.send('<h1>Hello form express</h1>');
})

// const server = http.createServer(app)
// server.listen(3000)
app.listen(3000);  // this is shorthand for above statement
