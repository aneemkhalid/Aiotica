<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "rajaayan.iplex@gmail.com";
    $subject = "New message from contact form";
    $First_Name = $_POST["First_Name"];
    $Last_Name = $_POST["Last_Name"];
    $Work_Email = $_POST["Work_Email"];
    $Phone_Number = $_POST["Phone_Number"];
    $Company_Name = $_POST["Company_Name"];
    $Company_Website = $_POST["Company_Website"];
    $Product = $_POST["Product"];
    $message = $_POST["message"];
    $headers = "From: $Work_Email";

    $body = "First Name: $First_Name\nLast Name: $Last_Name\nWork Email:\n$Work_Email\nPhone Number: $Phone_Number\nCompany Name: $Company_Name\nCompany Website: $Company_Website\nProduct: $Product\nmessage: $message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mail sent successfully.";
    } else {
        echo "Mail function failed.";
    }
    echo "Message sent!";
}
?>
