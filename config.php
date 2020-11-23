<?php
$credentials = array (
    "host" => encrypt("107.180.108.29"), // localhost - (Internal)  \  107.180.58.64 - (External)
    "user" => encrypt("jworklife"),
    "password" => encrypt("Freshmen1#"),
    "database" => encrypt("Writeitoutpublishingllc")
);

function encrypt($textToEncrypt) {

    $encryptionMethod = 'aes-256-ctr';
    $secretHash = "7234753778214125432A462D4A614E64";
    $iv = "597133743677397A";
    $encryptedTxt = bin2hex(openssl_encrypt($textToEncrypt, $encryptionMethod, $secretHash, OPENSSL_RAW_DATA, $iv));

    return $encryptedTxt;
}


function sendData($cred) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'localhost:3001/protect');
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Expect:'));
    curl_setopt($ch, CURLOPT_PORT, 3001);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 2);
    curl_setopt($ch, CURLOPT_, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($cred));
    curl_exec($ch);
    curl_close($ch);
    
    
}

sendData($credentials);
?>
