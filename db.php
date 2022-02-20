<?php
    //connect to db
    $uname = "root";
    $dbpass = "";
    $host = "localhost";
    $db = "ubrdb";

    $conn = mysqli_connect("$host", "$uname", "$dbpass", "$db") or die("DB Connection Err0r");
?>