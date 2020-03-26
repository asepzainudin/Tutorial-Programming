<?php

$data =  file_get_contents('coba.json');

$kependudukans = json_decode($data, true);

var_dump($kependudukans);
echo $kependudukans[0]["pembimbing"]["pembimbing1"];

?>