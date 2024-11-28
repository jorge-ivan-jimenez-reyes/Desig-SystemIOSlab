const { Pool } = require('pg'); // Biblioteca de PostgreSQL

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.connect()
  .then(() => console.log("Conexión exitosa a la base de datos"))
  .catch((err) => console.error("Error al conectar a la base de datos", err));

module.exports = pool;