const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const sequelize = require("./util/database");
const Product = require("./models/product");
const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findByPk(1)
    .then(user=>{
      req.user = user; // makes the user object available to all templates
      next();//so that we can move on with the next step 
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" }); // cascade meaning if user is deleted  all products related to that user will be also deleted.
User.hasMany(Product);

sequelize
  //.sync({force:true})//kepping force to true will update they table properties  if any changes found in the model
  .sync()
  .then((result) => {
    return User.findByPk(1);
    //console.log(result);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "max", email: "max@gmail.com" });
    }
    return user;
  })
  .then((user) => {
    //console.log(user)
    app.listen(3000);
  })
  .catch((err) => console.log(err));
