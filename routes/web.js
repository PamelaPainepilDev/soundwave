const express = require("express");
const router = express.Router();
const artistaWeb = require("../controllers/artistaWebController");
const cancionWeb = require("../controllers/cancionWebController");

router.get("/artistas", artistaWeb.listar);
router.get("/artistas/nuevo", artistaWeb.formNuevo);
router.get("/artistas/:id", artistaWeb.detalle);
router.post("/artistas", artistaWeb.crear);

router.get("/canciones", cancionWeb.listar);
router.get("/canciones/nueva", cancionWeb.formNueva);
router.get("/canciones/:id", cancionWeb.detalle);
router.post("/canciones", cancionWeb.crear);

module.exports = router;