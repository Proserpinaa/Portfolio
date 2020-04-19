<?php

$name    = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$email   = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

$headers = "From: $subject <{$email}>" . PHP_EOL .
    "Reply-To: <{$myEmail}>" . PHP_EOL .
    'X-Mailer: PHP/' . phpversion();
$headers .= 'Content-type: text/plain; charset=UTF-8; format=flowed' . "\r\n";
$headers .= 'Content-Transfer-Encoding: 8bit'."\r\n";
$myEmail = 'romenetsnadia@gmail.com';

mail($myEmail, $subject, $message, $headers);

echo '<div class="alert alert-success">I have received your message, thank you!</div>';