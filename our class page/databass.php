<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Class_website";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->$conncet_error) {
  die("연결 실패: " . $conn->$conncet_error);
}
?>