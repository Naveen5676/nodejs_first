const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //parser

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><label>Product name</label><input type="text" name="title"><br /><label>Product Size</label><input type="number" name="prosize"><br /><button type="submit">Add Product</button></form>'
  );
});

//app.get is only fired only  for GET request and we use app.post for incoming post request and app.use we use for all http request.
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello form express</h1>");
});

// const server = http.createServer(app)
// server.listen(3000)
app.listen(3000); // this is shorthand for above statement
