<?php
require_once '../db/connection.php';

$data = json_decode(file_get_contents("php://input"));

$id = $data->id ?? 0;
$name = $data->name ?? '';
$description = $data->description ?? '';
$logo = $data->logo ?? '';
$price = $data->price ?? 0;
$stock = $data->stock ?? 0;

if ($id > 0 && $name && $price >= 0 && $stock >= 0) {
    $stmt = $conn->prepare("UPDATE giftcards SET name = ?, description = ?, logo = ?, price = ?, stock = ? WHERE id = ?");
    $stmt->bind_param("sssdis", $name, $description, $logo, $price, $stock, $id);
    $stmt->execute();
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => "Datos inválidos"]);
}
?>
