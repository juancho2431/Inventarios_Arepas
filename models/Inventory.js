const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  location: { type: String, required: true }
});

module.exports = mongoose.model('Inventory', InventorySchema);
