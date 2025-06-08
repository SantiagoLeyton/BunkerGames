
const express = require('express');
const app = express();
const cors = require('cors');

// Middlewares básicos
app.use(cors());                  // Permitir requests desde el frontend
app.use(express.json());          // Parsear JSON en las requests

// Rutas
const authRoutes = require('./routes/auth');
const gameRoutes = require('./routes/games');

app.use('/api/auth', authRoutes);
app.use('/api/games', gameRoutes);

// Iniciar servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

/*
require('dotenv').config(); // ← Añade esta línea
const express = require('express');
const app = express();

// Ahora usa las variables de entorno
const PORT = process.env.PORT || 3001; // Usa el puerto del .env o 3001 por defecto
*/