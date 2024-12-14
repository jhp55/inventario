const express = require('express');
const {obtenerInventario,crearHerramienta}=require("../controllers/inventario")
const router = express.Router();

router.get("/",obtenerInventario)
router.post("/",crearHerramienta)

module.exports = router;