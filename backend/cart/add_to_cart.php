<?php
require_once '../db/connection.php';

$data = json_decode(file_get_contents("php://input"));

$user_id = $data->user_id ?? 0;
$product_type = $data->product_type ?? '';
$product_id = $data->product_id ?? 0;
$quantity = $data->quantity ?? 1;

if ($user_id && $product_type && $product_id) {
    // Primero verificamos si ese producto ya está en el carrito del usuario
    $check = $conn->prepare("SELECT id, quantity FROM cart_items WHERE user_id = ? AND product_type = ? AND product_id = ?");
    $check->bind_param("isi", $user_id, $product_type, $product_id);
    $check->execute();
    $result = $check->get_result();

    if ($row = $result->fetch_assoc()) {
        // Si ya existe, actualizamos la cantidad
        $new_quantity = $row['quantity'] + $quantity;
        $update = $conn->prepare("UPDATE cart_items SET quantity = ? WHERE id = ?");
        $update->bind_param("ii", $new_quantity, $row['id']);
        $update->execute();
        echo json_encode(["success" => true, "message" => "Cantidad actualizada"]);
    } else {
        // Si no existe, lo insertamos como nuevo
        $insert = $conn->prepare("INSERT INTO cart_items (user_id, product_type, product_id, quantity) VALUES (?, ?, ?, ?)");
        $insert->bind_param("isii", $user_id, $product_type, $product_id, $quantity);
        $insert->execute();
        echo json_encode(["success" => true, "message" => "Producto agregado al carrito"]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Datos incompletos"]);
}
?>
