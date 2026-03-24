let cart = JSON.parse(localStorage.getItem("cart")) || [];

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if(loader){
    setTimeout(()=>{
      loader.style.opacity="0";
      loader.style.transition="opacity 0.5s ease";
      setTimeout(()=>{loader.style.display="none";},500);
    },1500);
  }
  updateCart();
});

function addToCart(name, price){
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  alert(`${name} added to cart!`);
}

function updateCart(){
  const count = document.getElementById("cartCount");
  const sidebar = document.getElementById("cartSidebar");
  if(count) count.textContent = cart.length;
  if(sidebar){
    let html = '<button class="close-btn" onclick="toggleCart()">✖ Close</button>';
    html += "<h2>Your Cart</h2>";
    let total=0;
    cart.forEach(item=>{
      html+=`<p>${item.name} - $${item.price}</p>`;
      total+=item.price;
    });
    html+=`<h3>Total: $${total}</h3>`;
    html+=`<button onclick="checkout()">Checkout</button>`;
    sidebar.innerHTML = html;
  }
}

function toggleCart(){
  const cartEl=document.getElementById("cartSidebar");
  if(cartEl) cartEl.classList.toggle("active");
}

function checkout(){
  alert("Next step: secure checkout integration");
}
