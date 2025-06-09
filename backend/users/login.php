<?php
require_once '../db/connection.php';

$data = json_decode(file_get_contents("php://input"));

$email = $data->email ?? '';
$password = $data->password ?? '';

$stmt = $conn->prepare("SELECT id, username, password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    if (password_verify($password, $row['password'])) {
        echo json_encode([
            "success" => true,
            "user" => [
                "id" => $row['id'],
                "username" => $row['username']
            ]
        ]);
    } else {
        echo json_encode(["success" => false, "error" => "Contraseña incorrecta"]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Usuario no encontrado"]);
}
?>
