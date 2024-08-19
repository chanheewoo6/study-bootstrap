<?php
session_start();
include 'databass.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $email = $_POST['email'];
  $password = $_POST['password'];

  $sql = "SELECT * FROM users WHERE email= '$email' AND password= '$password'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    $SESSION['loggedin'] = true;
    header('Loction: index.html');
  } else {
    $error = "잘못된 이메일 또는 비밀번호입니다.";
  }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>로그인</title>
  <link rel="stylesheet" herf="styles.css">
</head>
<body>
  <header>
    <h1>로그인</h1>
      <nav>
        <ul>
          <li><a herf="index.html">홈</a></li>
          <li><a herf="register.php">회원가입</a></li>
</body>
</html>