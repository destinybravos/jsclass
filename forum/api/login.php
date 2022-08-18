<?php

    include_once 'db_connect.php';

    $username = $_POST['username'];
    $password = $_POST['password'];
    
    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        // return error with http header
        header('HTTP/1.1 200 OK');
        header('Content-Type: application/json');
        echo json_encode([
            'message' => 'User logged in successfully', 
            'status' => true, 
            'user' => $user
        ]);
    } else {
        header('HTTP/1.1 422 Unprocessable Entity');
        header('Content-Type: application/json');
        echo json_encode([
            'message' => 'Invalid username or password', 
            'status' => false
        ]);
    }
?>