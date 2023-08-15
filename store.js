// Store products
const products = [
    { name: 'Product 1' },
    { name: 'Product 2' },
    { name: 'Product 3' }
  ];
  
  // Cart array
  let cart = [];
  
  // Function to add a product to the cart
  function addToCart(productName) {
    const product = products.find(p => p.name === productName);
    cart.push(product);
    renderCart();
  }
  
  // Function to remove a product from the cart
  function removeFromCart(productName) {
    const productIndex = cart.findIndex(p => p.name === productName);
    if (productIndex !== -1) {
      cart.splice(productIndex, 1);
      renderCart();
    }
  }
  
  // Function to render the cart items
  function renderCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
  
    if (cart.length === 0) {
      cartItemsDiv.innerHTML = 'Your cart is empty.';
      return;
    }
  
    const ul = document.createElement('ul');
    cart.forEach(product => {
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.textContent = product.name;
  
      const button = document.createElement('button');
      button.textContent = 'Remove from Cart';
      button.addEventListener('click', () => removeFromCart(product.name));
  
      li.appendChild(span);
      li.appendChild(button);
      ul.appendChild(li);
    });
  
    cartItemsDiv.appendChild(ul);
  }