<?php
if(isset($_POST['email'])) {
     
    // Wpisz tutaj swój adres e-mail
    $to = "rozea@wp.pl";
     
    // Pobierz dane z formularza
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
     
    // Utwórz nag³ówki wiadomoœci e-mail
    $headers = "From: $email \r\n";
    $headers .= "Reply-To: $email \r\n";
     
    // Wys³anie wiadomoœci e-mail
    mail($to, $name, $message, $headers);
     
    // Wyœwietlenie komunikatu o wys³aniu wiadomoœci
    echo "Dziêkujemy za kontakt. Odpowiemy najszybciej jak to bêdzie mo¿liwe.";
     
}
?>
