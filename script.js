let cart = [];

window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

function addToCart(name, price){
  cart.push({name, price});
  updateCart();
}

function updateCart(){
  const list = document.getElementById("cartItems");
  const totalEl = document.getElementById("total");

  if(!list) return;

  list.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name + " - $" + item.price;
    list.appendChild(li);
    total += item.price;
  });

  totalEl.textContent = "Total: $" + total;
}

function checkout(){
  alert("Checkout coming next step (Stripe integration)");
}
