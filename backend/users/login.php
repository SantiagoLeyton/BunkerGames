<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require_once '../db/connection.php';

$data = json_decode(file_get_contents("php://input"));

$email = $data->email ?? '';
$password = $data->password ?? '';

$stmt = $conn->prepare("SELECT id, username, email, password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    if (password_verify($password, $row['password'])) {
        echo json_encode([
            "success" => true,
            "message" => "Inicio de sesión exitoso",
            "user" => [
                "id" => $row['id'],
                "username" => $row['username'],
                "email" => $row['email']
            ]
        ]);
    } else {
        http_response_code(401);
        echo json_encode([
            "success" => false,
            "message" => "Contraseña incorrecta"
        ]);
    }
} else {
    http_response_code(404);
    echo json_encode([
        "success" => false,
        "message" => "Usuario no encontrado"
    ]);
}
?>
