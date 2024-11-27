const express = require("express");
const { getAllComponents, createComponent } = require("../controllers/components");

const router = express.Router();

router.get("/", getAllComponents);
router.post("/", createComponent);

module.exports = router;