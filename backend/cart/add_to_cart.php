<?php
require_once '../db/connection.php';

$data = json_decode(file_get_contents("php://input"));

$user_id = $data->user_id ?? 0;
$product_type = $data->product_type ?? '';
$product_id = $data->product_id ?? 0;
$quantity = $data->quantity ?? 1;

if ($user_id && $product_type && $product_id) {
    $stmt = $conn->prepare("INSERT INTO cart_items (user_id, product_type, product_id, quantity) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("isii", $user_id, $product_type, $product_id, $quantity);
    $stmt->execute();
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => "Datos incompletos"]);
}
?>
