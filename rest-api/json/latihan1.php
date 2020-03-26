<?php

    // $mahasiswa = [
    //     [

    //     "nama" => "Sandhika Galih",
    //     "nrp" => "123456789",
    //     "email" => "asepzainudin14@gmail.com"
    //     ],
    //     [
    //     "nama" => "Sandhika Galih",
    //     "nrp" => "123456789",
    //     "email" => "asepzainudin14@gmail.com"
    //     ]
        
    // ];

    // var_dump($mahasiswa);


    $dbh = new PDO('mysql:host=localhost;dbname=databaseAvis', 'root', '');
    
    $db =  $dbh->prepare('SELECT * FROM Kependudukans');
    $db->execute();
    $kependudukans = $db->fetchAll(PDO::FETCH_ASSOC);

    $data = json_encode($kependudukans);

    echo $data;

?>