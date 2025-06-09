<?php
require_once '../db/connection.php';

$user_id = $_GET['user_id'] ?? 0;

if ($user_id) {
    $stmt = $conn->prepare("SELECT * FROM cart_items WHERE user_id = ?");
    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $result = $stmt->get_result();

    $items = [];
    while ($row = $result->fetch_assoc()) {
        $items[] = $row;
    }

    echo json_encode(["success" => true, "cart" => $items]);
} else {
    echo json_encode(["success" => false, "error" => "ID de usuario no proporcionado"]);
}
?>
