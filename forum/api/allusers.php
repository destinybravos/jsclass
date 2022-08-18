<?php

    include_once 'db_connect.php';

    // Fetch all users
    $sql = "SELECT * FROM users";
    $result = $conn->query($sql);
    $users = array();
    while($row = $result->fetch_assoc()) {
        $users[] = $row;
    }

    header('HTTP/1.1 200 OK');
    header('Content-Type: application/json');
    echo json_encode($users);
        
?>