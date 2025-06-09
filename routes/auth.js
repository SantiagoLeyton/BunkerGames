router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // 1. Hash de la contraseña (usa bcrypt o bcryptjs)
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // 2. DEBUG: Imprime la consulta SQL antes de ejecutarla
    console.log('Ejecutando query:', 
      `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${hashedPassword}')`
    );

    // 3. Ejecuta la consulta
    const [result] = await pool.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );

    // 4. DEBUG: Imprime el resultado de la inserción
    console.log('Resultado de inserción:', result);

    res.json({ message: 'Usuario registrado' });
  } catch (error) {
    console.error('Error en registro:', error); // <-- ¡Esto es clave!
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
});