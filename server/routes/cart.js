const express = require('express');
const router = express.Router();
const {
  getUserCart,
  addItemToCart,
  removeItemFromCart,
} = require('../models/queries');

router.get('/:userId', async (req, res) => {
  const cart = await getUserCart(req.params.userId);
  res.json(cart);
});

router.post('/add', async (req, res) => {
  const { userId, item } = req.body;
  await addItemToCart(userId, item);
  res.json({ message: 'Item añadido' });
});

router.post('/remove', async (req, res) => {
  const { userId, item } = req.body;
  await removeItemFromCart(userId, item);
  res.json({ message: 'Item eliminado' });
});

module.exports = router;
