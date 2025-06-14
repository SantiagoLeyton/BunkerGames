
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(loginForm);
      const data = {
        username: formData.get('username'),
        password: formData.get('password')
      };

      try {
        const response = await fetch('http://localhost/BunkerGames/backend/users/login.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log(result);

        if (response.ok) {
          alert(result.message || 'Inicio de sesión exitoso');
          // Aquí puedes redirigir, guardar token, etc.
          // window.location.href = 'dashboard.html';
        } else {
          alert(result.message || 'Credenciales incorrectas');
        }
      } catch (err) {
        console.error('Error al conectar con el servidor:', err);
        alert('Error al conectar con el servidor');
      }
    });