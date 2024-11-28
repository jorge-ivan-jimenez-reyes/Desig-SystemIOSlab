const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Importar rutas
const userRoutes = require("./routes/users");
const componentRoutes = require("./routes/components");
const styleRoutes = require("./routes/styles");

const app = express();

// Configurar CORS
app.use(
    cors({
      origin: "http://localhost:3000", // Permitir solicitudes desde el frontend
      methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
      allowedHeaders: ["Content-Type"], // Encabezados permitidos
    })
  );
  

// Middleware
app.use(express.json());

// Rutas
app.use("/api/users", userRoutes);
app.use("/api/components", componentRoutes);
app.use("/api/styles", styleRoutes);

// Ruta Proxy para Colormind API
app.post("/api/colormind", async (req, res) => {
    try {
      const axios = require("axios");
      const response = await axios.post("http://colormind.io/api/", req.body);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: "Error fetching palette from Colormind" });
    }
  });

// Puerto y servidor
const port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});