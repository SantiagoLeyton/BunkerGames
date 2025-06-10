<?php
require_once '../db/connection.php';

$data = json_decode(file_get_contents("php://input"));

$id = $data->id ?? 0;
$username = $data->username ?? '';
$email = $data->email ?? '';
$password = $data->password ?? '';

if ($id && ($username || $email || $password)) {
    $fields = [];
    $params = [];
    $types = "";

    if ($username) {
        $fields[] = "username = ?";
        $params[] = $username;
        $types .= "s";
    }

    if ($email) {
        $fields[] = "email = ?";
        $params[] = $email;
        $types .= "s";
    }

    if ($password) {
        $fields[] = "password = ?";
        $params[] = password_hash($password, PASSWORD_DEFAULT);
        $types .= "s";
    }

    $sql = "UPDATE users SET " . implode(", ", $fields) . " WHERE id = ?";
    $params[] = $id;
    $types .= "i";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param($types, ...$params);
    $stmt->execute();

    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => "Datos incompletos"]);
}
?>
