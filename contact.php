<?php

$host = "localhost";
$username = "root";
$password = "";
$database = "portfolio_db";

$conn = mysqli_connect($host, $username, $password, $database);

if (!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name1 = mysqli_real_escape_string($conn, trim($_POST["name"]));
    $email1 = mysqli_real_escape_string($conn, trim($_POST["email"]));
    $msg1 = mysqli_real_escape_string($conn, trim($_POST["message"]));

    if ($name1 == "" || $email1 == "" || $msg1 == "") {
        header("Location: index.html?status=error#contact");
        exit();
    }

    $sql = "INSERT INTO messages (name, email, message) VALUES ('$name1', '$email1', '$msg1')";

    if (mysqli_query($conn, $sql)) {
        header("Location: index.html?status=success#contact");
        exit();
    } else {
        header("Location: index.html?status=error#contact");
        exit();
    }
} else {
    header("Location: index.html");
    exit();
}

mysqli_close($conn);
?>
