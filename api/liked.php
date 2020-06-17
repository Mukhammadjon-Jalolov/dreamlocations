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

if(isset($_POST['register'])){
    //Do something to Register a user to a Database. CARE ABOUT NEW USER!
    echo "Hello for Register!";
}


?>