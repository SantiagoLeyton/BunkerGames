document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Debes iniciar sesión para ver tu carrito.");
    window.location.href = "login.html";
    return;
  }

  fetch(`http://localhost/BunkerGames/backend/cart/get_cart.php?user_id=${user.id}`)
    .then(res => res.json())
    .then(data => {
      if (!data.success) {
        alert("Error al cargar el carrito.");
        return;
      }

      const items = data.cart;
      const container = document.querySelector(".cart-container");
      const totalBox = document.querySelector(".cart-total");
      let total = 0;

      container.innerHTML = `<h2>Tu carrito</h2>`;

      items.forEach(item => {
        total += item.price * item.quantity;

        const html = `
          <div class="cart-item" data-id="${item.cart_id}">
            <img src="${item.logo}" alt="${item.name}">
            <div class="item-details">
              <h3>${item.name}</h3>
              <p>$${item.price} x ${item.quantity}</p>
            </div>
            <button class="noselect delete-btn">Eliminar</button>
          </div>
        `;

        container.insertAdjacentHTML("beforeend", html);
      });

      totalBox.innerHTML = `
        <h3>Total: $${total.toFixed(2)}</h3>
        <button class="butoncito">
          <svg><!-- icono SVG --></svg>
          <p class="text">Comprar</p>
        </button>
      `;

      // Eliminar ítem
      document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const itemId = btn.closest(".cart-item").dataset.id;

          fetch("http://localhost/BunkerGames/backend/cart/delete_cart.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: itemId })
          })
            .then(res => res.json())
            .then(result => {
              if (result.success) {
                btn.closest(".cart-item").remove();
                location.reload(); // Recalcula el total
              } else {
                alert("No se pudo eliminar el producto.");
              }
            });
        });
      });
    });
});
