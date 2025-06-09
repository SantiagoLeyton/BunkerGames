<?php
require_once '../db/connection.php';

$data = json_decode(file_get_contents("php://input"));

$name = $data->name ?? '';
$description = $data->description ?? '';
$price = $data->price ?? 0;
$stock = $data->stock ?? 0;
$logo = $data->logo ?? '';

if ($name && $price >= 0 && $stock >= 0) {
    $stmt = $conn->prepare("INSERT INTO giftcards (name, description, logo, price, stock) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssdi", $name, $description, $logo, $price, $stock);
    $stmt->execute();
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => "Datos incompletos"]);
}
?>
