const Sequelize = require('sequelize');

const sequelize = new Sequelize("node-complete", "root", "Wali@1065", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;