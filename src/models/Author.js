const Sequelize = require("sequelize");
const db = require("../config/db");
const Book = require("./Book");

const Author = db.define("author", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Author.hasMany(Book);

module.exports = Author;
