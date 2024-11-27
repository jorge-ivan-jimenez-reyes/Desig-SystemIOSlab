const express = require("express");
const { getAllStyles, createStyle } = require("../controllers/styles");

const router = express.Router();

// Ruta para obtener todos los estilos
router.get("/", getAllStyles);

// Ruta para crear un nuevo estilo
router.post("/", createStyle);

module.exports = router;