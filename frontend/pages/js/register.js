    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(registerForm);
      const data = {
        username: formData.get('username'),
        password: formData.get('password')
      };

      try {
        const response = await fetch('http://localhost/BunkerGames/backend/users/register.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log(result);

        if (response.ok) {
          alert(result.message || 'Usuario registrado exitosamente');
          // Puedes redirigir al login automáticamente:
          // window.location.href = 'login.html';
        } else {
          alert(result.message || 'Error en el registro');
        }
      } catch (err) {
        console.error('Error al conectar con el servidor:', err);
        alert('Error al conectar con el servidor');
      }
    });