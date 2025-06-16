<?php
// Cabecera para permitir solicitudes desde el frontend
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Leer JSON puro del body
$input = json_decode(file_get_contents('php://input'), true);

// Validar datos
if (!isset($input['username'], $input['email'], $input['password'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Faltan datos.']);
    exit;
}

// Conectar a la base de datos (ajusta esto a tu configuración)
$host = "localhost";
$db = "bunkergames";
$user = "root";
$pass = "";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode([
        'success' => true,
        'message' => 'Usuario registrado con éxito.'
    ]);

    exit;
}

// Escapar e insertar
$username = $conn->real_escape_string($input['username']);
$email = $conn->real_escape_string($input['email']);
$password = password_hash($input['password'], PASSWORD_DEFAULT); // Encriptar contraseña

$sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => 'Usuario registrado con éxito.']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Error al registrar usuario.']);
}

$conn->close();
?>
