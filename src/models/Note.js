const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");

const NoteModel = sequelize.define("notas", {
  author: DataTypes.STRING,
  title: DataTypes.STRING,
  content: DataTypes.TEXT,
  image: DataTypes.STRING,
  date: DataTypes.DATE
});

module.exports = { NoteModel };
