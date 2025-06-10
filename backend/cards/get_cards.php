<?php
require_once '../db/connection.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$sql = "SELECT * FROM giftcards";
$result = $conn->query($sql);

$cards = [];

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $cards[] = $row;
    }
}

echo json_encode($cards);

$conn->close();
?>
