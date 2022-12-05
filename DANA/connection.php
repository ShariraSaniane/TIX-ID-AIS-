<?php

//Database connection using mysqli
//$conn = new mysqli('localhost', 'root', '', 'mission11');
$conn = mysqli_connect('localhost', 'root', '', 'eshop');
if ($conn->connect_error) {
    echo "$conn->connect_error";
    die('Connection Failed: ' . $conn->connect_error);
}
