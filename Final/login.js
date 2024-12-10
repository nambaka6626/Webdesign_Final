// scripts/login.js
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("User name and password need to confirm");
        return false;
    }

    // Kiểm tra thông tin đăng nhập với localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        alert("Login complette!");

        // Chuyển hướng đến trang index.html
        setTimeout(function () {
            window.location.href = "index.html"; // Đảm bảo thực hiện sau một thời gian để alert hiển thị trước
        }, 100); // Thời gian trì hoãn ngắn (100ms)
        
        return false; // Ngừng gửi form để tránh tải lại trang hiện tại
    } else {
        alert("Username or password false!");
        return false; // Dừng việc gửi form
    }
}
