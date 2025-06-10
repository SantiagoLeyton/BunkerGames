<?php
require_once '../db/connection.php';

$data = json_decode(file_get_contents("php://input"));

$cart_item_id = $data->id ?? 0;
$quantity = $data->quantity ?? 1;

if ($cart_item_id && $quantity > 0) {
    $stmt = $conn->prepare("UPDATE cart_items SET quantity = ? WHERE id = ?");
    $stmt->bind_param("ii", $quantity, $cart_item_id);
    $stmt->execute();

    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => "Datos inválidos"]);
}
?>
