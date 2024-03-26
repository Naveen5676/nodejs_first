const express= require('express')
const path = require("path");


const rootDir = require("../util/path");

var router= express.Router()

router.get("/contactus",(req,res,next)=>{
    res.sendFile(path.join(rootDir , "views" ,"contactus.html"));
})

router.post('/contactus', (req, res) =>{
    res.sendFile(path.join(rootDir , 'views','success.html'));
})

module.exports= router;