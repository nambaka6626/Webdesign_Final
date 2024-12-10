document.addEventListener("DOMContentLoaded", function() {
    // Load user data
    const username = localStorage.getItem("username") || "John Doe";
    const email = localStorage.getItem("email") || "johndoe@example.com";
    const phone = localStorage.getItem("phone") || "+1234567890";
    const address = localStorage.getItem("address") || "123 Street, City, Country";
    const balance = localStorage.getItem("balance") || "100.00";
    const avatar = localStorage.getItem("avatar") || "images/default-avatar.png";

    // Display user data
    document.getElementById("username").textContent = username;
    document.getElementById("email").textContent = email;
    document.getElementById("phone").textContent = phone;
    document.getElementById("address").textContent = address;
    document.getElementById("balance").textContent = balance;
    document.getElementById("avatar").src = avatar;

    // Populate the edit form with user data
    document.getElementById("editUsername").value = username;
    document.getElementById("editEmail").value = email;
    document.getElementById("editPhone").value = phone;
    document.getElementById("editAddress").value = address;
    document.getElementById("editBalance").value = balance;

    // Handle avatar upload
    const avatarUpload = document.getElementById("avatarUpload");
    avatarUpload.addEventListener("change", function(event) {
        const reader = new FileReader();
        reader.onload = function() {
            const avatarSrc = reader.result;
            document.getElementById("avatar").src = avatarSrc;
            localStorage.setItem("avatar", avatarSrc);
        };
        reader.readAsDataURL(event.target.files[0]);
    });

    // Show the edit form when the "Edit" button is clicked
    const editButton = document.getElementById("editButton");
    const editFormContainer = document.getElementById("editFormContainer");

    editButton.addEventListener("click", function() {
        // Toggle the visibility of the edit form
        if (editFormContainer.style.display === "none") {
            editFormContainer.style.display = "block";
            editButton.textContent = "Cancel Edit"; // Change button text to "Cancel Edit"
        } else {
            editFormContainer.style.display = "none";
            editButton.textContent = "Edit"; // Change button text back to "Edit"
        }
    });

    // Handle form submission for saving changes
    const form = document.getElementById("editForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const newUsername = document.getElementById("editUsername").value;
        const newEmail = document.getElementById("editEmail").value;
        const newPhone = document.getElementById("editPhone").value;
        const newAddress = document.getElementById("editAddress").value;
        const newBalance = document.getElementById("editBalance").value;

        // Save the new data to localStorage
        localStorage.setItem("username", newUsername);
        localStorage.setItem("email", newEmail);
        localStorage.setItem("phone", newPhone);
        localStorage.setItem("address", newAddress);
        localStorage.setItem("balance", newBalance);

        // Display success message (could be an alert or a notification)
        alert("Your information has been updated successfully!");

        // Reload the page to reflect the changes
        window.location.reload();
    });
});

document.getElementById('editInfoButton').addEventListener('click', function() {
    var formContainer = document.getElementById('editFormContainer');
    // Toggle display of the form container
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
      formContainer.style.display = 'block';
    } else {
      formContainer.style.display = 'none';
    }
  });
  
