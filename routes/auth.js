const express = require('express');
const router = express.Router();

// Ruta de registro (ejemplo)
router.post('/register', (req, res) => {
  res.json({ message: "Registro exitoso" });
});

// Exporta el router
module.exports = router; // ¡Esta línea es crucial!