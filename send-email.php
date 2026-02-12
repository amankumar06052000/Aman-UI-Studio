<?php
// Form se data lena
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Aapki email jahan messages jaayenge
$to = "amankumar06052000@gmail.com"; // yahan apni email likho
$subject = "New Contact Form Message";

// Email body
$body = "Name: $name\nEmail: $email\nMessage:\n$message";

// Email headers
$headers = "From: $email";

// Email send
if(mail($to, $subject, $body, $headers)){
    echo "success"; // JS me check karenge
} else {
    echo "error";
}
?>

