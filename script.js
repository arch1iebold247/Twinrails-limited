let cart = JSON.parse(localStorage.getItem("cart")) || [];

window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if(loader) loader.style.display = "none";
  }, 1500);

  updateCart();
});

function addToCart(name, price){
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart(){
  const count = document.getElementById("cartCount");
  if(count) count.textContent = cart.length;
}

function toggleCart(){
  document.getElementById("cartSidebar").classList.toggle("active");
}
