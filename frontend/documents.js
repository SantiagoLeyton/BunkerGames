// Function to change the favicon
let icons = [
  'images/PageIcons/favicon1.png',
  'images/PageIcons/favicon2.png',
  'images/PageIcons/favicon3.png'
];

let current = 0;
setInterval(() => {
  const favicon = document.getElementById('favicon');
  current = (current + 1) % icons.length;
  favicon.href = icons[current];
}, 1000);

// Hero
// Espera a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {

  /* --- 1) Usa EXACTAMENTE el array que ya tenías --- */
  const images = [
    'images/gamesPhotos/Cyberpunk2077_1.png',
    'images/gamesPhotos/Cyberpunk2077_2.png',
    'images/gamesPhotos/Cyberpunk2077_3.png',
    'images/gamesPhotos/DBZkakarot1.png',
    'images/gamesPhotos/DBZkakarot2.png',
    'images/gamesPhotos/DBZkakarot3.png',
    'images/gamesPhotos/EldenRing1.png', 
    'images/gamesPhotos/EldenRing2.png', 
    'images/gamesPhotos/EldenRing3.png', 
    'images/gamesPhotos/F1_24_1.png', 
    'images/gamesPhotos/F1_24_2.png',
    'images/gamesPhotos/F1_24_3.png',  
    'images/gamesPhotos/FC24_1.png', 
    'images/gamesPhotos/FC24_2.png',
    'images/gamesPhotos/FC24_3.png',  
    'images/gamesPhotos/GtaV_1.png',  
    'images/gamesPhotos/GtaV_2.png',
    'images/gamesPhotos/GtaV_3.png', 
    'images/gamesPhotos/HogwartsLegacy_1.png',
    'images/gamesPhotos/HogwartsLegacy_2.png',
    'images/gamesPhotos/HogwartsLegacy_3.png',
    'images/gamesPhotos/Left4Dead2_1.png',
    'images/gamesPhotos/Left4Dead2_2.png',
    'images/gamesPhotos/Left4Dead2_3.png', 
    'images/gamesPhotos/MinecraftWallpaper1.png',
    'images/gamesPhotos/MinecraftWallpaper2.png',
    'images/gamesPhotos/MinecraftWallpaper3.png',
    'images/gamesPhotos/MK11_1.png',
    'images/gamesPhotos/MK11_2.png',
    'images/gamesPhotos/MK11_3.png',
    'images/gamesPhotos/RedDeadRedemption2_1.png',
    'images/gamesPhotos/RedDeadRedemption2_2.png',
    'images/gamesPhotos/RedDeadRedemption2_3.png',
    'images/gamesPhotos/ResidentEvil_1.png',
    'images/gamesPhotos/ResidentEvil_2.png',
    'images/gamesPhotos/ResidentEvil_3.png',
    'images/gamesPhotos/TheWitcher3_1.png',
    'images/gamesPhotos/TheWitcher3_2.png',
    'images/gamesPhotos/TheWitcher3_3.png',
  ];

  /* --- 2) Barajamos y duplicamos para que nunca se acabe --- */
  const shuffled = images.sort(() => Math.random() - 0.5);
  const allImages = shuffled.concat(shuffled);  // duplicado

  const track = document.getElementById('slider-track');

  /* --- 3) Insertamos las imágenes en el DOM --- */
  allImages.forEach(src => {
    const img = document.createElement('img');
    img.src  = src;
    img.alt  = 'Imagen del carrusel';
    track.appendChild(img);
  });

  /* --- 4) Cuando cargue la PRIMERA imagen calculamos velocidad --- */
  const firstImg = track.querySelector('img');
  firstImg.addEventListener('load', () => {

    const imgWidth   = firstImg.offsetWidth + 10;     // 10 = gap
    const totalWidth = imgWidth * allImages.length;

    /* Ancho fijo para que el navegador sepa cuánto desplazar */
    track.style.width = totalWidth + 'px';

    /* ≈ 100 px/s → ajusta dividiendo entre tu velocidad deseada */
    const duration = totalWidth / 100; // segundos

    /* Creamos la animación con JS para que encaje exactamente */
    track.style.animation = `scroll ${duration}s linear infinite`;
  });

});

/*  document.addEventListener("DOMContentLoaded", function () {
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
*/