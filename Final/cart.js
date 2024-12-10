// cart.js

// Lấy giỏ hàng từ localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Hiển thị giỏ hàng
function displayCart() {
    const cart = getCart();
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    cartItemsContainer.innerHTML = cart.map(item => {
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" />
                <h3>${item.name}</h3>
                <p>${item.price.toLocaleString()} VND</p>
                <p>Number of products: ${item.quantity}</p>
                <button onclick="removeFromCart(${item.id})">Delete</button>
            </div>
        `;
    }).join('');

    // Tính tổng giá trị giỏ hàng
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPriceElement.textContent = totalPrice.toLocaleString();
}

// Xóa một sản phẩm khỏi giỏ hàng
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);  // Loại bỏ sản phẩm
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();  // Cập nhật lại giỏ hàng
}

// Xóa toàn bộ giỏ hàng
function clearCart() {
    localStorage.removeItem('cart');
    displayCart();  // Cập nhật lại giỏ hàng sau khi xóa
}

// Thanh toán
function checkout() {
    let cart = getCart();
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const availableMoney = parseFloat(prompt("Enter the amount you have:"));
    
    if (availableMoney >= totalPrice) {
    alert("Purchase successful! Thank you for your purchase.");
    localStorage.removeItem('cart'); // Delete cart after checkout
    displayCart(); // Update cart
    } else {
    alert("Insufficient funds to pay.");
    }
}

// Gắn sự kiện cho các nút
document.getElementById("clear-cart").addEventListener("click", clearCart);
document.getElementById("checkout").addEventListener("click", checkout);
document.getElementById("back-to-home").addEventListener("click", backToHome);

// Quay lại trang chủ
function backToHome() {
    window.location.href = 'index.html';  // Chuyển hướng về trang chủ
}

// Hiển thị giỏ hàng khi trang được tải
displayCart();
