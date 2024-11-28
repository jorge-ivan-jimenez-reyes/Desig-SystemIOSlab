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

app.get("/api/colors", async (req, res) => {
    try {
      const response = await axios.get(
        `https://www.thecolorapi.com/scheme?hex=${req.query.hex || "F55A42"}&mode=${req.query.mode || "monochrome"}&count=${req.query.count || 5}`
      );
      res.status(200).json(response.data);
    } catch (error) {
      console.error("Error fetching colors:", error.message);
      res.status(500).json({ error: "Error al obtener colores." });
    }
  });
  
// Puerto y servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://0.0.0.0:3000:${port}`);
});