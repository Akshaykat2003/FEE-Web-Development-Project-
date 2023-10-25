// cart.js

// Function to add an item to the cart
function addToCart(item) {
    // Check if the cart data is already stored in local storage
    let cart = localStorage.getItem('cart');
  
    if (!cart) {
      // If the cart data doesn't exist, create an empty cart
      cart = [];
    } else {
      // Parse the existing cart data from JSON
      cart = JSON.parse(cart);
    }
  
    // Add the item to the cart
    cart.push(item);
  
    // Update the cart data in local storage
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Function to get the cart count
  function getCartCount() {
    let cart = localStorage.getItem('cart');
  
    if (!cart) {
      return 0;
    } else {
      cart = JSON.parse(cart);
      return cart.length;
    }
  }

  // Update the cart count when the page loads
document.addEventListener('DOMContentLoaded', function () {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = getCartCount();
  });
  
  