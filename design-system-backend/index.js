const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");
const { Client } = require('@elastic/elasticsearch'); // Importa el cliente de Elasticsearch

// Importar rutas
const userRoutes = require("./routes/users");
const componentRoutes = require("./routes/components");
const styleRoutes = require("./routes/styles");

const app = express();

// Configurar CORS
app.use(
  cors({
    origin: ["http://localhost:3000", "https://main.d3tuxl8t84e47y.amplifyapp.com", "https://jorgejimenezdev.com"], // Ajusta según tu dominio
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
    allowedHeaders: ["Content-Type"], // Encabezados permitidos
  })
);

// Middleware
app.use(express.json());

// Configurar Elasticsearch
const esClient = new Client({
  node: 'http://54.87.133.148:9200', // URL de tu instancia Elasticsearch
  auth: {
    username: 'elastic', // Usuario
    password: 'V*UIYL8BbcAnGIoU78bw', // Contraseña
  },
});

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

// Rutas para Elasticsearch
// Ruta para indexar documentos
app.post("/api/elasticsearch/index", async (req, res) => {
  try {
    const { index, id, document } = req.body;

    const result = await esClient.index({
      index, // Nombre del índice
      id, // ID opcional
      document, // Documento JSON que deseas indexar
    });

    res.status(200).json({ message: "Documento indexado exitosamente", result });
  } catch (error) {
    console.error("Error al indexar documento:", error.message);
    res.status(500).json({ error: "Error al indexar documento" });
  }
});

// Ruta para buscar documentos
app.post("/api/elasticsearch/search", async (req, res) => {
  try {
    const { index, query } = req.body;

    const result = await esClient.search({
      index, // Nombre del índice
      query, // Consulta en formato JSON
    });

    res.status(200).json(result.hits.hits);
  } catch (error) {
    console.error("Error al buscar documentos:", error.message);
    res.status(500).json({ error: "Error al buscar documentos" });
  }
});

// Ruta para eliminar documentos
app.delete("/api/elasticsearch/delete", async (req, res) => {
  try {
    const { index, id } = req.body;

    const result = await esClient.delete({
      index, // Nombre del índice
      id, // ID del documento
    });

    res.status(200).json({ message: "Documento eliminado exitosamente", result });
  } catch (error) {
    console.error("Error al eliminar documento:", error.message);
    res.status(500).json({ error: "Error al eliminar documento" });
  }
});

// Puerto y servidor
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://0.0.0.0:${port}`);
});