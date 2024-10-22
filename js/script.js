// Simulasi data admin
const adminAccount = {
    email: "septyanindra95@gmail.com",
    password: "admin"
};

// Fungsi untuk login admin
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('admin-email').value;
    const password = document.getElementById('admin-password').value;

    if (email === adminAccount.email && password === adminAccount.password) {
        localStorage.setItem('isAdminLoggedIn', true);
        window.location.href = 'admin.html';  // Redirect ke halaman admin setelah login
    } else {
        document.getElementById('login-error').innerText = 'Email atau password salah';
    }
});

// Fungsi untuk cek apakah admin sudah login atau belum
function checkAdminAuth() {
    const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isAdminLoggedIn) {
        window.location.href = 'admin-login.html';  // Redirect ke login jika belum login
    }
}

// Fungsi logout admin
function logout() {
    localStorage.removeItem('isAdminLoggedIn');
    window.location.href = 'admin-login.html';
}

// Panggil fungsi cek autentikasi di halaman admin
if (window.location.pathname === '/admin.html') {
    checkAdminAuth();
}

// Fungsi untuk menampilkan produk di halaman pengguna
let products = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    
    products.forEach((product, index) => {
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

// Fungsi untuk menambahkan produk baru (Admin)
document.getElementById('upload-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productImage = URL.createObjectURL(document.getElementById('product-image').files[0]);

    const newProduct = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    products.push(newProduct);
    displayAdminProducts(); // Tampilkan di halaman admin
    displayProducts(); // Tampilkan di halaman pengguna
});

// Fungsi untuk menampilkan produk di halaman admin (dengan opsi hapus/edit)
function displayAdminProducts() {
    const adminProductList = document.getElementById('admin-product-list');
    adminProductList.innerHTML = '';

    products.forEach((product, index) => {
        const adminProductItem = `
        <div class="product-item">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Harga: ${product.price}</p>
            <button onclick="deleteProduct(${index})">Hapus</button>
        </div>`;
        adminProductList.innerHTML += adminProductItem;
    });
}



// Fungsi untuk menghapus produk (Admin)
function deleteProduct(index) {
    products.splice(index, 1);
    displayAdminProducts();
    displayProducts();
}

// Panggil fungsi untuk menampilkan produk
displayProducts();
displayAdminProducts();
