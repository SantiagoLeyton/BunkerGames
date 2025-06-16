<?php
require_once '../db/connection.php';
header('Content-Type: application/json');

$user_id = $_GET['user_id'] ?? 0;

if (!$user_id) {
    echo json_encode(["success" => false, "error" => "ID de usuario no proporcionado"]);
    exit;
}

// Consulta todos los items del carrito del usuario
$stmt = $conn->prepare("SELECT * FROM cart_items WHERE user_id = ?");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

$items = [];

while ($row = $result->fetch_assoc()) {
    $product_type = $row['product_type'];
    $product_id = $row['product_id'];
    $cart_item = [
        "cart_id" => $row['id'],
        "quantity" => $row['quantity'],
        "product_type" => $product_type
    ];

    // Buscar los datos del producto según su tipo
    if ($product_type === 'game') {
        $query = $conn->prepare("SELECT name, logo, price FROM games WHERE id = ?");
    } elseif ($product_type === 'card') {
        $query = $conn->prepare("SELECT name, logo, price FROM cards WHERE id = ?");
    } else {
        continue; // tipo desconocido
    }

    $query->bind_param("i", $product_id);
    $query->execute();
    $product_result = $query->get_result();

    if ($product_data = $product_result->fetch_assoc()) {
        $items[] = array_merge($cart_item, $product_data);
    }
}

echo json_encode(["success" => true, "cart" => $items]);
