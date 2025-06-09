document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector(".button1");

    loginBtn.addEventListener("click", function (e) {
      e.preventDefault();

      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;

      // Mandar solicitud al backend
      fetch("http://localhost/BunkerGames/backend/users/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: username, // Asumimos que ingresan email aquí
          password: password
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert("Inicio de sesión exitoso. Bienvenido " + data.user.username);
          // Redirigir o guardar datos en localStorage
          localStorage.setItem("user", JSON.stringify(data.user));
          window.location.href = "index.html";
        } else {
          alert("Error: " + data.error);
        }
      })
      .catch(err => {
        console.error("Error al iniciar sesión:", err);
        alert("Hubo un error al conectar con el servidor.");
      });
    });
  });