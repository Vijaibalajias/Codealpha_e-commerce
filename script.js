let cart = [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart!`);
}

function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', displayCart);
