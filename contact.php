<?php
if(isset($_POST['submit'])){
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    


    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $mailTo =  "test@test.com";
    $headers = "Frome: ".$email;
    

    mail($mailTo, $subject, $message, $headers);
    header("Location: index.php?mailsend");


}}