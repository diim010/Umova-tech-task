function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^\d{10}$/;

    var isValid = true;

    // Name validation (optional)
    if (name.trim() === '') {
        alert('Name is required');
        isValid = false;
    }

    // Email validation
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerHTML = 'Invalid email format';
        isValid = false;
    } else {
        document.getElementById('emailError').innerHTML = '';
    }

    // Phone validation
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').innerHTML = 'Invalid phone number';
        isValid = false;
    } else {
        document.getElementById('phoneError').innerHTML = '';
    }

    return isValid;
}
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.getElementById("eye-icon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "img/eye.png"; // Change to open eye icon
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "img/eye2.png"; // Change to closed eye icon
    }
}
