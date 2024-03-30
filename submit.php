<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $city = $_POST['city'];
    // email
    $to = $email; 
    $subject = "Umova test form";
     $message = "
                Hello $name,
                \n\nForm data:
                    \n\nName: $name
                    \nEmail: $email
                    \nPhone: $phone 
                    \nCity: $city\n
                    ";
    // Send email
    $headers = "From: diim010@hotmail.com";
    if (mail($to, $subject, $message, $headers)) {
        echo "Form submitted successfully!"; // Send success
    } else {
        echo "Error: Unable to send email."; // Send error
    }
} else {
    // If form data is not received via POST, return an error message
    echo "Error: Form data not received!";
}
?>
