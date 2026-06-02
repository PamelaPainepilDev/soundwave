const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Cancion = sequelize.define("Cancion", {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  album: {
    type: DataTypes.STRING
  },
  duracion: {
    type: DataTypes.INTEGER
  },
  reproducciones: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

module.exports = Cancion;