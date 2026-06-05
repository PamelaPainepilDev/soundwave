const express = require("express");
const router = express.Router();
const artistas = require("../controllers/artistaController");
const canciones = require("../controllers/cancionController");

router.get("/artistas", artistas.listar);
router.get("/artistas/:id", artistas.obtener);
router.post("/artistas", artistas.crear);
router.put("/artistas/:id", artistas.actualizar);
router.delete("/artistas/:id", artistas.eliminar);

router.get("/canciones", canciones.listar);
router.get("/canciones/:id", canciones.obtener);
router.post("/canciones", canciones.crear);
router.put("/canciones/:id", canciones.actualizar);
router.delete("/canciones/:id", canciones.eliminar);

module.exports = router; 