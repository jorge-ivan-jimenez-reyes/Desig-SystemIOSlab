const express = require("express");
const pool = require("../config/db");
const router = express.Router();

// Obtener todos los usuarios
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

// Registrar un nuevo usuario
router.post("/", async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users (email, name, password) VALUES ($1, $2, $3) RETURNING *",
      [email, name, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ error: "Error al registrar usuario" });
  }
});

// Actualizar suscripción
router.put("/:id/subscribe", async (req, res) => {
  const { id } = req.params;
  const { subscribed } = req.body;

  try {
    const result = await pool.query(
      "UPDATE users SET subscribed = $1 WHERE id = $2 RETURNING *",
      [subscribed, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error al actualizar suscripción:", error);
    res.status(500).json({ error: "Error al actualizar suscripción" });
  }
});

module.exports = router;