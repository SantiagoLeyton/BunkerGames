const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('../database/db');

// Registro de usuario
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hash de la contraseña (seguridad básica)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insertar usuario en la DB
    const [result] = await pool.query(
      'INSERT INTO users (username, email, password, is_admin) VALUES (?, ?, ?, ?)',
      [username, email, hashedPassword, false]
    );

    res.status(201).json({ message: 'Usuario registrado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
});

// Login (simplificado)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Buscar usuario en la DB
  const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
  const user = users[0];

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  // Comparar contraseñas
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Contraseña incorrecta' });
  }

  res.json({ message: 'Login exitoso', user });
});

module.exports = router;