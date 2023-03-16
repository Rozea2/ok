<?php
if(isset($_POST['email'])) {

    // adres e-mail, na który zostaną przesłane wiadomości
    $to = "rozea@wp.pl";

    // temat wiadomości
    $subject = "Nowa wiadomość od ".$_POST['name'];

    // treść wiadomości
    $message = "
    Imię: ".$_POST['name']."\n
    Email: ".$_POST['email']."\n
    Wiadomość: ".$_POST['message']."\n
    ";

    // nagłówki wiadomości e-mail
    $headers = "From: ".$_POST['email']."\r\n";
    $headers .= "Reply-To: ".$_POST['email']."\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    // wysłanie wiadomości e-mail
    if(mail($to, $subject, $message, $headers)) {
        echo "Wiadomość została wysłana.";
    } else {
        echo "Wystąpił błąd podczas wysyłania wiadomości.";
    }

} else {
    echo "Wystąpił błąd podczas wysyłania wiadomości.";
}
?>
