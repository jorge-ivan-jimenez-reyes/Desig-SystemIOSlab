const pool = require("../models/db"); // Conexión a la base de datos

// Obtener todos los estilos
const getAllStyles = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM styles");
    res.json(result.rows); // Devuelve los estilos como JSON
  } catch (error) {
    console.error("Error al obtener los estilos:", error);
    res.status(500).json({ message: "Error al obtener los estilos" });
  }
};

// Crear un nuevo estilo
const createStyle = async (req, res) => {
  const { name, type, value, description } = req.body;

  // Validar los datos
  if (!name || !type || !value) {
    return res.status(400).json({ message: "Faltan campos requeridos" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO styles (name, type, value, description) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, type, value, description]
    );

    res.status(201).json(result.rows[0]); // Devuelve el estilo creado
  } catch (error) {
    console.error("Error al crear el estilo:", error);
    res.status(500).json({ message: "Error al crear el estilo" });
  }
};

module.exports = { getAllStyles, createStyle };