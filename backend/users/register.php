<?php
require_once '../db/connection.php';

$data = json_decode(file_get_contents("php://input"));

$username = $data->username ?? '';
$email = $data->email ?? '';
$password = $data->password ?? '';

if ($username && $email && $password) {
    $hashed = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $email, $hashed);
    $stmt->execute();
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => "Datos incompletos"]);
}
?>
