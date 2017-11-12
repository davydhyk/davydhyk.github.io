<?php
    /*header("Access-Control-Allow-Origin: *");
    $url = $_GET["url"];
    $ch = curl_init($url);
    $fp = fopen('capcha.jpg', 'wb');
    curl_setopt($ch, CURLOPT_FILE, $fp);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_exec($ch);
    curl_close($ch);
    fclose($fp);*/
    header("Access-Control-Allow-Origin: *");
    $text = $_GET["str"];
    $number = rand(0, 100);
    $fp = fopen("$number.txt", "w");
    fwrite($fp, $text);
    fclose($fp);
    echo $number;
?>