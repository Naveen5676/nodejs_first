const express = require("express");

const router = express.Router();

//app.get is only fired only  for GET request and get does a exact match of they routes
// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><label>Product name</label><input type="text" name="prodtitle"><br /><label>Product Size</label><input type="number" name="prodsize"><br /><button type="submit">Add Product</button></form>'
  );
});

//we use app.post for incoming post request and app.use we use for all http request.
// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
