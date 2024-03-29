<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Fetch form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $city = $_POST["city"];

    // Email details
    $to = $email;
    $subject = "Form Submission";
    $message = "Hello $name,\n\nThank you for submitting the form. Here are your details:\n\nName: $name\nEmail: $email\nPhone: $phone\nCity: $city\n";

    // Send email
    $headers = "From: your_email@example.com"; // Replace with your email address
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email. Please try again later.";
    }
} else {
    echo "Invalid request!";
}
?>
