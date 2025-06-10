<?php
require_once '../db/connection.php';

$data = json_decode(file_get_contents("php://input"));

$id = $data->id ?? 0;

if ($id) {
    $stmt = $conn->prepare("DELETE FROM users WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();

    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => "ID no proporcionado"]);
}
?>
