const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");

const NoteModel = sequelize.define("notas", {
  author: DataTypes.STRING,
  title: DataTypes.STRING,
  content: DataTypes.TEXT,
  image: DataTypes.STRING,
});

module.exports = { NoteModel };
