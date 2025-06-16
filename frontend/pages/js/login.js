document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById('loginForm');
  const loginButton = document.querySelector('.button1');   // Iniciar sesión
  const registerButton = document.querySelector('.button2'); // Registrarse

  // Maneja clic en "Iniciar sesión"
  loginButton.addEventListener('click', async (e) => {
    e.preventDefault();
    await handleAuth('login');
  });

  // Maneja clic en "Registrarse"
  registerButton.addEventListener('click', async (e) => {
    e.preventDefault();
    await handleAuth('register');
  });

  async function handleAuth(mode) {
    const formData = new FormData(loginForm);
    const username = formData.get('username');
    const password = formData.get('password');

    const data =
      mode === 'register'
        ? { username: username, email: username, password } // Registro necesita los 3
        : { email: username, password };                    // Login necesita email y password

    const url =
      mode === 'login'
        ? 'http://localhost/BunkerGames/backend/users/login.php'
        : 'http://localhost/BunkerGames/backend/users/register.php';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      console.log(result);

      if (response.ok && result.success) {
        alert(result.message || (mode === 'login' ? 'Inicio de sesión exitoso' : 'Registro exitoso'));

        if (mode === 'login') {
          localStorage.setItem("user", JSON.stringify(result.user));
          window.location.href = "../index.html";
        } else {
          window.location.href = "login.html"; // o recarga formulario vacío
        }
      } else {
        alert(result.message || 'Ocurrió un error');
      }
    } catch (err) {
      console.error('Error al conectar con el servidor:', err);
      alert('No se pudo conectar con el servidor');
    }
  }
});
