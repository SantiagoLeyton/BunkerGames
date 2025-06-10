<?php
require_once '../db/connection.php';

$sql = "SELECT * FROM games";
$result = $conn->query($sql);

$games = [];

while ($row = $result->fetch_assoc()) {
    $games[] = $row;
}

echo json_encode($games);
?>
