const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Registrar un nuevo usuario
const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Crear un nuevo usuario
    const hashedPassword = bcrypt.hashSync(password, 8);
    const user = new User({ username, password: hashedPassword, role });

    await user.save();

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).json({ token, user: { username: user.username, role: user.role } });
  } catch (error) {
    console.error('Error during registration', error); // Agregar esta línea para depurar
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { register, login };
