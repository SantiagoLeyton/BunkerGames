const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '', 
  database: process.env.DB_NAME || 'bunkergames', 
  waitForConnections: true,
  connectionLimit: 10
});

pool.query('SELECT 1 + 1 AS result')
  .then(([rows]) => console.log('Conexión a DB exitosa:', rows))
  .catch(err => console.error('Error de conexión a DB:', err));

module.exports = pool;