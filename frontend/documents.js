// Carrusel de imágenes del hero
document.addEventListener('DOMContentLoaded', () => {
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
    'images/gamesPhotos/TheWitcher3_3.png'
  ];

  const shuffled = images.sort(() => Math.random() - 0.5);
  const allImages = shuffled.concat(shuffled);
  const track = document.getElementById('slider-track');

  allImages.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Imagen del carrusel';
    track.appendChild(img);
  });

  const firstImg = track.querySelector('img');
  firstImg.addEventListener('load', () => {
    const imgWidth = firstImg.offsetWidth + 10;
    const totalWidth = imgWidth * allImages.length;
    track.style.width = totalWidth + 'px';
    const duration = totalWidth / 100;
    track.style.animation = `scroll ${duration}s linear infinite`;
  });
});

// Función para crear juegos o tarjetas
function createProductCard(product, type) {
  const user = JSON.parse(localStorage.getItem("user"));

  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${product.logo}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button class="button">Añadir al carrito</button>
  `;

  const button = card.querySelector("button");
  button.addEventListener("click", () => {
    if (!user) {
      alert("Debes iniciar sesión para añadir al carrito.");
      return;
    }

    fetch("http://localhost/BunkerGames/backend/cart/add_to_cart.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user.id,
        product_type: type,
        product_id: product.id,
        quantity: 1
      })
    })
    .then(res => res.json())
    .then(data => {
      alert(data.message || "Producto añadido al carrito");
    })
    .catch(err => {
      console.error("Error al añadir al carrito:", err);
    });
  });

  return card;
}

// Cargar los juegos
function loadGames() {
  fetch("http://localhost/BunkerGames/backend/games/get_games.php")
    .then(res => res.json())
    .then(games => {
      const container = document.getElementById("products-container");
      if (!container) return;
      games.forEach(game => {
        const card = createProductCard(game, "game");
        container.appendChild(card);
      });
    })
    .catch(error => console.error("Error cargando los juegos:", error));
}

// Cargar las tarjetas de regalo
function loadCards() {
  fetch("http://localhost/BunkerGames/backend/cards/get_cards.php")
    .then(res => res.json())
    .then(cards => {
      const container = document.getElementById("gift-cards-container");
      if (!container) return;
      cards.forEach(card => {
        const cardElement = createProductCard(card, "card");
        container.appendChild(cardElement);
      });
    })
    .catch(error => console.error("Error cargando las tarjetas:", error));
}

// Mostrar login o cerrar sesión
document.addEventListener("DOMContentLoaded", () => {
  const authContainer = document.getElementById("auth-options");
  const user = JSON.parse(localStorage.getItem("user"));

  if (authContainer) {
    if (user) {
      authContainer.innerHTML = `
        <button class="btn" id="logout-btn">Cerrar sesión</button>
      `;
      document.getElementById("logout-btn").addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.reload();
      });
    } else {
      authContainer.innerHTML = `
        <button class="btn" onclick="window.location.href='pages/login.html'">Login</button>
      `;
    }
  }

  // Cargar productos dinámicamente
  loadGames();
  loadCards();
});
