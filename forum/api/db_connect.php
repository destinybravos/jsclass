<?php
    $conn = new MySQLi('localhost', 'root', '', 'tutor_jsclass');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
?>