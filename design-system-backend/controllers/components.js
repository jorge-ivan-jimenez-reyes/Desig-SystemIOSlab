const Components = require("../models/components");

const getAllComponents = async (req, res) => {
  try {
    const components = await Components.getAll();
    res.json(components);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener componentes" });
  }
};

const createComponent = async (req, res) => {
  try {
    const component = await Components.create(req.body);
    res.status(201).json(component);
  } catch (error) {
    res.status(500).json({ error: "Error al crear componente" });
  }
};

module.exports = { getAllComponents, createComponent };