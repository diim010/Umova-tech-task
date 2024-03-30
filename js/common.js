function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var password = document.getElementById('city').value;

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
        document.getElementById('phoneError').innerHTML = 'Invalid phone numbe ex: 000-000-0000';
        isValid = false;
    } else {
        document.getElementById('phoneError').innerHTML = '';
    }

    if (isValid) {
        sendData(name, email, phone, password, city);
    }

    return false;
}

function sendData(name, email, phone, password, city) {
    var formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('password', password);
    formData.append('city', city);

    fetch('submit.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        // success response from submit.php
        console.log(data);
    })
    .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    });
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
// variant 2
// send data using JQ
// $(document).ready(function() {
//     $("#myForm").submit(function(event) {
//       event.preventDefault();

//       const name = $("#name").val();
//       const email = $("#email").val();
//       const phone = $("#phone").val();
//       const password = $("#password").val();
//       const city = $("#city").val();

//       $.ajax({
//         type: "POST",
//         url: "submit.php",
//         data: {
//           name: name,
//           email: email,
//           phone: phone,
//           password: password,
//           city: city,
//         },
//         success: function(response) {
//           alert(response);
//           // Optionally, reset the form
//           $("#myForm")[0].reset();
//         },
//         error: function(xhr, status, error) {
//           alert("Error: " + error);
//         }
//       });
//     });
//   });