const { Pool } = require("pg");
require("dotenv").config();

// Configurar la conexión a PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on("connect", () => {
  console.log("Conexión exitosa a PostgreSQL");
});

pool.on("error", (err) => {
  console.error("Error en la conexión a PostgreSQL", err);
});

module.exports = pool;