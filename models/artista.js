const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Artista = sequelize.define("Artista", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING
  },
  pais: {
    type: DataTypes.STRING
  }
});

module.exports = Artista;