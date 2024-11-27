const pool = require("./db");

const Users = {
  async getAll() {
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;
  },
  async getById(id) {
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return rows[0];
  },
  async create(user) {
    const { email, name, password } = user;
    const { rows } = await pool.query(
      "INSERT INTO users (email, name, password) VALUES ($1, $2, $3) RETURNING *",
      [email, name, password]
    );
    return rows[0];
  },
  async update(id, user) {
    const { name, subscribed } = user;
    const { rows } = await pool.query(
      "UPDATE users SET name = $1, subscribed = $2 WHERE id = $3 RETURNING *",
      [name, subscribed, id]
    );
    return rows[0];
  },
  async delete(id) {
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
    return { message: "Usuario eliminado exitosamente" };
  },
};

module.exports = Users;