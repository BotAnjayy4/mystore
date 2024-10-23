const correctEmail = 'admin@admin.com';
const correctPassword = 'admin';

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('admin-email').value;
    const password = document.getElementById('admin-password').value;

    if (email === correctEmail && password === correctPassword) {
        alert('Login berhasil');
        window.location.href = '../admin/admin.html';
    } else {
        alert('Email atau password salah');
    }
});
