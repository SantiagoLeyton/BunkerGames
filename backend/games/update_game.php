<?php
require_once '../db/connection.php';

$data = json_decode(file_get_contents("php://input"));

$id = $data->id ?? 0;
$name = $data->name ?? '';
$description = $data->description ?? '';
$price = $data->price ?? 0;
$stock = $data->stock ?? 0;
$trailer = $data->trailer ?? '';
$images = $data->images ?? '';
$logo = $data->logo ?? '';
$tags = $data->tags ?? '';

if ($id > 0 && $name && $price >= 0 && $stock >= 0) {
    $stmt = $conn->prepare("UPDATE games SET name=?, description=?, price=?, stock=?, trailer=?, images=?, logo=?, tags=? WHERE id=?");
    $stmt->bind_param("ssdissssi", $name, $description, $price, $stock, $trailer, $images, $logo, $tags, $id);
    $stmt->execute();
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => "Datos incompletos"]);
}
?>
