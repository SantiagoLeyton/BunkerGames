<?php
require_once '../db/connection.php';

$data = json_decode(file_get_contents("php://input"));

$name = $data->name ?? '';
$description = $data->description ?? '';
$price = $data->price ?? 0;
$stock = $data->stock ?? 0;
$trailer = $data->trailer ?? '';
$images = $data->images ?? '';
$logo = $data->logo ?? '';
$tags = $data->tags ?? '';

if ($name && $price >= 0 && $stock >= 0) {
    $stmt = $conn->prepare("INSERT INTO games (name, description, price, stock, trailer, images, logo, tags) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssdissss", $name, $description, $price, $stock, $trailer, $images, $logo, $tags);
    $stmt->execute();
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => "Datos incompletos"]);
}
?>
