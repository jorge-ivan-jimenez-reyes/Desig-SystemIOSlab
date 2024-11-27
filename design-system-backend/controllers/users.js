const Users = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await Users.getById(req.params.id);
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuario" });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await Users.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await Users.update(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const result = await Users.delete(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar usuario" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};