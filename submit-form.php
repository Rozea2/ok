<?php

if(isset($_POST['dane1']) && isset($_POST['dane2']) && isset($_POST['dane3'])) {
  $dane1 = $_POST['dane1'];
  $dane2 = $_POST['dane2'];
  $dane3 = $_POST['dane3'];
  
  $plik = "/Rozea2/ok/dane.txt"; // œcie¿ka do pliku
  
  $fp = fopen($plik, 'a');
  fwrite($fp, $dane1."\t".$dane2."\t".$dane3."\n");
  fclose($fp);
  
  echo "Dane zosta³y zapisane do pliku.";
} else {
  echo "Nie uda³o siê zapisaæ danych do pliku.";
}

?>
