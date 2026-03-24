/* =====================
script.js (Updated for new circular loader animation)
===================== */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if(loader){
    // Keep loader visible for 1.5s, then fade out smoothly
    setTimeout(()=>{
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.5s ease";
      setTimeout(()=>{ loader.style.display = "none"; }, 500);
    }, 1500);
  }
  updateCart();
});

function addToCart(name, price){
  const existing = cart.find(item => item.name === name);
  if(existing){
    existing.quantity += 1;
  } else {
    cart.push({name, price, quantity:1});
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  alert(`${name} added to cart!`);
}

function removeFromCart(name){
  cart = cart.filter(item => item.name !== name);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart(){
  const count = document.getElementById("cartCount");
  const sidebar = document.getElementById("cartSidebar");
  if(count) count.textContent = cart.reduce((a,b)=>a+b.quantity,0);

  if(sidebar){
    let html = '<button class="close-btn" onclick="toggleCart()">✖ Close</button>';
    html += '<h2>Your Cart</h2>';
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
      html += `<div class="cart-item">
        <span>${item.name} x${item.quantity} - $${item.price*item.quantity}</span>
        <button onclick="removeFromCart('${item.name}')">Remove</button>
      </div>`;
    });
    html += `<h3>Total: $${total}</h3>`;
    html += '<button onclick="checkout()">Checkout</button>';
    sidebar.innerHTML = html;
  }
}

function toggleCart(){
  const cartEl = document.getElementById("cartSidebar");
  if(cartEl) cartEl.classList.toggle("active");
}

function checkout(){
  alert("Next step: secure checkout integration");
}
