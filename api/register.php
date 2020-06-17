<?php
require_once "./api.php";
require "../vendor/autoload.php";

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
error_reporting(E_ERROR | E_PARSE);

$username = '';
$password = '';
$conn = new mysqli($hn, $un, $pw, $db);

if(isset($_POST['username'])){
    $username = $_POST['username'];
}

if(isset($_POST['password'])){
    $password = $_POST['password'];
}


$rez = $conn->query("select * from users where Username = '$username' AND Password = '$password'");

if($rez){
    $resp = "Already Registered in our system";
    echo json_encode($resp);
} else {
    $query = "insert into users (Username, Password) VALUES ('$username', '$password')";

    $result = $conn->query($query);
    if($result){
        echo "Good news! You`ve been registered to our system!";
    }
}

?>