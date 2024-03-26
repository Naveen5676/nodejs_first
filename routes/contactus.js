const path = require('path');

const express= require('express');

const router = express.Router();

const contactControler = require('../controllers/contact')
router.get("/contactus",contactControler.contactus)

router.post('/contactus',contactControler.success)

module.exports=router;