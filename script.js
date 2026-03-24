/* ===== CART SYSTEM ===== */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ===== LOADER ===== */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.5s ease";

      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }, 1500); // ensures it's visible
  }

  updateCart();
});

/* ===== CART FUNCTIONS ===== */
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  const count = document.getElementById("cartCount");
  const sidebar = document.getElementById("cartSidebar");

  if (count) count.textContent = cart.length;

  if (sidebar) {
    sidebar.innerHTML = "<h2>Your Cart</h2>";
    let total = 0;

    cart.forEach(item => {
      sidebar.innerHTML += `<p>${item.name} - $${item.price}</p>`;
      total += item.price;
    });

    sidebar.innerHTML += `<h3>Total: $${total}</h3>`;
    sidebar.innerHTML += `<button onclick="checkout()">Checkout</button>`;
  }
}

function toggleCart() {
  const cartEl = document.getElementById("cartSidebar");
  if (cartEl) cartEl.classList.toggle("active");
}

function checkout() {
  alert("Next step: secure checkout integration");
}
