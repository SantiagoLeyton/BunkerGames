const express = require('express');
const app = express();

// Middlewares básicos
app.use(express.json()); // Para parsear JSON
app.use(express.urlencoded({ extended: true })); // Para formularios HTML

// Rutas (¡aquí está el problema común!)
const authRoutes = require('./routes/auth');
const gamesRoutes = require('./routes/games');
const usersRoutes = require('./routes/users');

app.use('/api/auth', authRoutes); // Verifica que authRoutes sea una función/router válida
app.use('/api/games', gamesRoutes);
app.use('/api/users', usersRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});