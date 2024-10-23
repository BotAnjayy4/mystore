let products = JSON.parse(localStorage.getItem('products')) || [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach((product) => {
        const productItem = `
        <div class="product-item">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Harga: ${product.price}</p>
            <a href="https://wa.me/6289667644225?text=Beli%20${product.name}%20dengan%20harga%20${product.price}">
                <button class="beli-button">BELI</button>
            </a>
        </div>`;
        productList.innerHTML += productItem;
    });
}

displayProducts();
