const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Importar rutas
const userRoutes = require("./routes/users");
const componentRoutes = require("./routes/components");
const styleRoutes = require("./routes/styles");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Usar express.json() en lugar de body-parser

// Rutas
app.use("/api/users", userRoutes);
app.use("/api/components", componentRoutes);
app.use("/api/styles", styleRoutes);

// Puerto y servidor
const port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});