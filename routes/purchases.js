const express = require('express');
const router = express.Router();
const Purchase = require('../models/Purchase');
const authenticate = require('../middleware/authenticate');

// Ruta para agregar una compra
router.post('/', authenticate, async (req, res) => {
  try {
    const newPurchase = new Purchase({
      product: req.body.product,
      quantity: req.body.quantity,
      location: req.user.location
    });
    await newPurchase.save();
    res.json(newPurchase);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Aquí se pueden agregar más rutas para consultar, modificar y borrar compras

module.exports = router;
