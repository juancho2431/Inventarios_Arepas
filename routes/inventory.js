const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');
const authenticate = require('../middleware/authenticate');

// Ruta para obtener inventario
router.get('/', authenticate, async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Aquí se pueden agregar más rutas para agregar, modificar y borrar inventario según el rol

module.exports = router;

