const express = require("express");
const path = require('path')


const rootDir = require('../util/path')

const router = express.Router();

//app.get is only fired only  for GET request and get does a exact match of they routes
// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
 res.sendFile(path.join(rootDir , 'views', 'add-product.html'));
});

//we use app.post for incoming post request and app.use we use for all http request.
// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
