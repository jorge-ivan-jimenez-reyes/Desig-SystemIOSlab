const pool = require("./db");

const Styles = {
  async getAll() {
    const { rows } = await pool.query("SELECT * FROM styles");
    return rows;
  },
  async create(style) {
    const { name, type, value, description } = style;
    const { rows } = await pool.query(
      "INSERT INTO styles (name, type, value, description) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, type, value, description]
    );
    return rows[0];
  },
};

module.exports = Styles;