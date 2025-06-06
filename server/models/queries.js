const db = require('../db');

const findUserByEmailOrUsername = async (input) => {
  const [rows] = await db.execute(
    'SELECT * FROM users WHERE email = ? OR username = ?',
    [input, input]
  );
  return rows[0];
};

const createUser = async (username, email, password) => {
  await db.execute(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [username, email, password]
  );
};

const getUserCart = async (userId) => {
  const [rows] = await db.execute(
    'SELECT item FROM carts WHERE user_id = ?',
    [userId]
  );
  return rows.map(row => row.item);
};

const addItemToCart = async (userId, item) => {
  await db.execute('INSERT INTO carts (user_id, item) VALUES (?, ?)', [userId, item]);
};

const removeItemFromCart = async (userId, item) => {
  await db.execute('DELETE FROM carts WHERE user_id = ? AND item = ? LIMIT 1', [userId, item]);
};

module.exports = {
  findUserByEmailOrUsername,
  createUser,
  getUserCart,
  addItemToCart,
  removeItemFromCart,
};
