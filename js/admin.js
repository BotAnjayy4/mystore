let products = JSON.parse(localStorage.getItem('products')) || [];

function saveProductToLocalStorage(product) {
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}

function displayAdminProducts() {
    const adminProductList = document.getElementById('admin-product-list');
    adminProductList.innerHTML = '';

    products.forEach((product, index) => {
        const productItem = `
        <div class="product-item">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Harga: ${product.price}</p>
            <button onclick="deleteProduct(${index})">Hapus</button>
        </div>`;
        adminProductList.innerHTML += productItem;
    });
}

function deleteProduct(index) {
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    displayAdminProducts();
}

document.getElementById('upload-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productImage = document.getElementById('product-image').value;

    const newProduct = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    saveProductToLocalStorage(newProduct);
    displayAdminProducts();
    this.reset();
});

displayAdminProducts();
