// Load products from JSON
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        window.products = data;  // Lưu dữ liệu sản phẩm vào biến global
        displayProducts(data);    // Hiển thị tất cả sản phẩm ban đầu
    })
    .catch(error => console.error('Error loading product data:', error));

// Hàm hiển thị các sản phẩm
function displayProducts(products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = products.map(product => {
        return `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" />
                <h3>${product.name}</h3>
                <p>${product.price.toLocaleString()} VND</p>
                <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">Add to cart</button>
            </div>
        `;
    }).join('');
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(id, name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = { id, name, price, image, quantity: 1 };

    // Kiểm tra nếu sản phẩm đã có trong giỏ hàng
    const existingProductIndex = cart.findIndex(item => item.id === id);
    if (existingProductIndex >= 0) {
        cart[existingProductIndex].quantity++;
    } else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    // Hiển thị thông báo khi thêm sản phẩm
    alert("Add to cart!");
}

// Hàm lọc sản phẩm
function filterProducts() {
    const searchFilter = document.getElementById("searchInput").value.toLowerCase();
    const brandFilter = document.getElementById("categoryFilter").value.toLowerCase();
    const categoryFilter = document.getElementById("brandFilter").value.toLowerCase();
    const minPrice = parseFloat(document.getElementById("minPrice").value) || 0;
    const maxPrice = parseFloat(document.getElementById("maxPrice").value) || Infinity;

    // Lọc sản phẩm từ mảng products đã tải
    const filteredProducts = window.products.filter(product => {
        const matchName = product.name.toLowerCase().includes(searchFilter);
        const matchBrand = brandFilter ? product.brand.toLowerCase() === brandFilter : true;
        const matchCategory = categoryFilter ? product.category.toLowerCase() === categoryFilter : true;
        const matchPrice = product.price >= minPrice && product.price <= maxPrice;

        return matchName && matchBrand && matchCategory && matchPrice;
    });

    // Hiển thị các sản phẩm đã lọc
    displayProducts(filteredProducts);
}
