const express = require('express');
const router = express.Router();
const db = require('../database/db');
const bcrypt = require('bcrypt');

// Helper para manejar errores de la DB
const handleDBError = (res, error) => {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Error en el servidor' });
};

// Obtener perfil de usuario (ejemplo: GET /api/users/profile?id=1)
router.get('/profile', async (req, res) => {
    try {
        const [user] = await db.query(
            'SELECT id, username, email, created_at FROM users WHERE id = ?',
            [req.query.id]
        );
        if (!user[0]) return res.status(404).json({ error: 'Usuario no encontrado' });
        res.json(user[0]);
    } catch (error) {
        handleDBError(res, error);
    }
});

// Actualizar perfil (ejemplo: PUT /api/users/profile)
router.put('/profile', async (req, res) => {
    const { id, username, email } = req.body;
    try {
        await db.query(
            'UPDATE users SET username = ?, email = ? WHERE id = ?',
            [username, email, id]
        );
        res.json({ message: 'Perfil actualizado' });
    } catch (error) {
        handleDBError(res, error);
    }
});

// Añadir método de pago (simulado para el proyecto)
router.post('/payment-methods', async (req, res) => {
    const { user_id, card_number, card_holder, expiration_date } = req.body;
    
    // Validación básica (simulada)
    if (!card_number || !card_holder || !expiration_date) {
        return res.status(400).json({ error: 'Datos de tarjeta incompletos' });
    }

    try {
        // En un proyecto real, NUNCA guardarías los datos así
        await db.query(
            'INSERT INTO user_payment_methods (user_id, card_number, card_holder, expiration_date) VALUES (?, ?, ?, ?)',
            [user_id, card_number, card_holder, expiration_date]
        );
        res.json({ message: 'Método de pago añadido (simulado)' });
    } catch (error) {
        handleDBError(res, error);
    }
});

// Obtener biblioteca de juegos del usuario
router.get('/library', async (req, res) => {
    try {
        const [games] = await db.query(
            `SELECT g.id, g.name, g.price 
             FROM user_library ul
             JOIN games g ON ul.game_id = g.id
             WHERE ul.user_id = ?`,
            [req.query.user_id]
        );
        res.json(games);
    } catch (error) {
        handleDBError(res, error);
    }
});

module.exports = router;