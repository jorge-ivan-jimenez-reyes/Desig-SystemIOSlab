const pool = require("../models/db"); // Conexión a la base de datos

// Obtener todos los componentes
const getAllComponents = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM components");
    res.json(result.rows); // Devuelve los componentes como JSON
  } catch (error) {
    console.error("Error al obtener los componentes:", error);
    res.status(500).json({ message: "Error al obtener los componentes" });
  }
};

// Crear un nuevo componente
const createComponent = async (req, res) => {
  const { name, description, category } = req.body;

  // Validar los datos
  if (!name || !category) {
    return res.status(400).json({ message: "Faltan campos requeridos" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO components (name, description, category) VALUES ($1, $2, $3) RETURNING *",
      [name, description, category]
    );

    res.status(201).json(result.rows[0]); // Devuelve el componente creado
  } catch (error) {
    console.error("Error al crear el componente:", error);
    res.status(500).json({ message: "Error al crear el componente" });
  }
};

module.exports = { getAllComponents, createComponent };