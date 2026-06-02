require("dotenv").config();
const express = require("express");
const sequelize = require("./config/database");
require("./models");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

async function iniciar() {
  try {
    await sequelize.authenticate();
    console.log("✓ Conexión OK");
    await sequelize.sync({ alter: true });
    console.log("✓ Tablas listas");
    app.listen(PORT, () => console.log(`✓ http://localhost:${PORT}`));
  } catch (err) {
    console.error("✗ Error:", err.message);
  }
}

iniciar();