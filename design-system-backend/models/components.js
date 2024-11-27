const pool = require("./db");

const Components = {
  async getAll() {
    const { rows } = await pool.query("SELECT * FROM components");
    return rows;
  },
  async create(component) {
    const { name, description, category } = component;
    const { rows } = await pool.query(
      "INSERT INTO components (name, description, category) VALUES ($1, $2, $3) RETURNING *",
      [name, description, category]
    );
    return rows[0];
  },
};

module.exports = Components;