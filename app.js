require("dotenv").config();
const express = require("express");
const {engine} = require("express-handlebars");
const path = require("path");
const sequelize = require("./config/database");
require("./models");
const apiRouter = require("./routes/api");
const webRouter = require("./routes/web")

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", apiRouter);
app.use("/", webRouter);

const PORT = process.env.PORT || 3000;

async function iniciar() {
  try {
    await sequelize.authenticate();
    console.log("Conexión OK");
    await sequelize.sync({force: false});
    console.log("Tablas listas");
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
  } catch (err) {
    console.error("Error:", err.message);
  }
}


iniciar();