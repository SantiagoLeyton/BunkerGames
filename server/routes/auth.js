const express = require('express');
const router = express.Router();
const { findUserByEmailOrUsername, createUser } = require('../models/queries');

// Registro
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  await createUser(username, email, password);
  res.status(201).json({ message: 'Usuario registrado' });
});

// Login
router.post('/login', async (req, res) => {
  const { emailOrUsername, password } = req.body;
  const user = await findUserByEmailOrUsername(emailOrUsername);
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }
  res.json({ userId: user.id });
});

module.exports = router;
