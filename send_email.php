<?php
if(isset($_POST['email'])) {
     
    // Wpisz tutaj sw�j adres e-mail
    $to = "rozea@wp.pl";
     
    // Pobierz dane z formularza
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
     
    // Utw�rz nag��wki wiadomo�ci e-mail
    $headers = "From: $email \r\n";
    $headers .= "Reply-To: $email \r\n";
     
    // Wys�anie wiadomo�ci e-mail
    mail($to, $name, $message, $headers);
     
    // Wy�wietlenie komunikatu o wys�aniu wiadomo�ci
    echo "Dzi�kujemy za kontakt. Odpowiemy najszybciej jak to b�dzie mo�liwe.";
     
}
?>
