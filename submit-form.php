<?php
    if(isset($_POST['data1']) && isset($_POST['data2']) && isset($_POST['data3'])) {
        $data1 = $_POST['data1'];
        $data2 = $_POST['data2'];
        $data3 = $_POST['data3'];
        $file = "dane.txt";
        $current = file_get_contents($file);
        $current .= $data1 . "," . $data2 . "," . $data3 . "\n";
        file_put_contents($file, $current);
        echo "Dane zostały zapisane!";
    } else {
        echo "Nie udało się zapisać danych.";
    }
?>
