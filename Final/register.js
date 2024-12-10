function validateRegister() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Kiểm tra nếu các trường nhập liệu không rỗng
    if (!username || !email || !password) {
        alert("All item need to confirm");
        return false;
    }

    // Kiểm tra định dạng email hợp lệ
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Email false");
        return false;
    }

    // Lưu thông tin người dùng vào localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Register complette!");

    // Chuyển hướng đến trang đăng nhập
    setTimeout(function () {
        window.location.href = "login.html"; // Sau khi đăng ký thành công, chuyển hướng đến trang login
    }, 100); // Thời gian trì hoãn ngắn (100ms) để alert hiển thị trước khi chuyển trang
    
    return false; // Ngừng gửi form để tránh tải lại trang hiện tại
}
