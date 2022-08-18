<?php

    include_once 'db_connect.php';

    // get file content from POST request
    $file = file_get_contents('php://input');

    // decode json to array
    $data = json_decode($file, true);
    $username = $data['username'];
    $password = $data['password'];
    $email = $data['email'];

    // // Check if user already exists
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        // return error with http header
        header('HTTP/1.1 422 Unprocessable Entity');
        echo json_encode([
            'message' => 'User already exists', 
            'status' => false
        ]);
    } else {
        $sql = "INSERT INTO users (username, password, email) VALUES ('$username', '$password', '$email')";
        if ($conn->query($sql) === TRUE) {
            header('HTTP/1.1 200 OK');
            header('Content-Type: application/json');
            echo json_encode([
                'message' => 'User created successfully', 
                'status' => true
            ]);
        } else {
            header('HTTP/1.1 500 Internal Server Error');
            header('Content-Type: application/json');
            echo json_encode([
                'message' => 'Error adding user. '. $conn->error, 
                'status' => false
            ]);
        } 
    }
?>