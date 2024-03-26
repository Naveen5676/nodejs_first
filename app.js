const http = require("http");
const path = require('path')

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const adminRoutes = require('./routes/admin') ; 
const  shopRoutes=require('./routes/shop');
const contactusRoutes = require('./routes/contactus');

app.use(bodyParser.urlencoded({ extended: false })); //parser

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactusRoutes);


app.use('/',(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname , 'views', '404.html'))
});

// const server = http.createServer(app)
// server.listen(3000)
app.listen(3000); // this is shorthand for above statement
