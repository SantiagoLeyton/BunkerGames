<?php
require_once '../db/connection.php';

$data = json_decode(file_get_contents("php://input"));

$cart_item_id = $data->id ?? 0;

if ($cart_item_id) {
    $stmt = $conn->prepare("DELETE FROM cart_items WHERE id = ?");
    $stmt->bind_param("i", $cart_item_id);
    $stmt->execute();

    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => "ID no válido"]);
}
?>
