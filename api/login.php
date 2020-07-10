<?php
require_once "./api.php";
require "../vendor/autoload.php";
use \Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=UTF-8');
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT, PATCH");
header("Access-Control-Allow-Headers: Content-Type, Origin, X-Requested-With, Accept, Authorization, X-Auth-Token");
error_reporting(E_ERROR | E_PARSE);


$conn = mysqli_connect($hn, $un, $pw, $db);

$username = '';
$password = '';


if(isset($_POST['username'])){
    $username = $_POST['username'];
}

if(isset($_POST['password'])){
    $password = $_POST['password'];
}


$temppass = '';

$query = "select Username, Password from users where Username = '$username'";
$result = mysqli_query($conn, $query);

if($result->num_rows){
	$row = $result->fetch_assoc();
} else {
	http_response_code(401); //Buni qo`shish kerak
	echo json_encode(array("message" => "Incorrect Password or Username"));
}


/*This part send JWT tokens to users in case if their credentials match the DB
*/
if(password_verify($password, $row['Password'])){
	$secret_key = "YOUR_SECRET_KEY";
	$expire_claim = time() + 600;
	$token = array(
		"exp" => $expire_claim,
		"data" => array(
			"id" => "123",
			"username" => $username
		)
	);
	
	http_response_code(200);
	
	$jwt = JWT::encode($token, $secret_key);

	saveLoggedin($username, $jwt, $conn);

	echo json_encode(
		array(
			"message" => "Successful login",
			"jwt" => $jwt,
			"expireAt" => $expire_claim,
			"user" => $username
	));
}
else {
	http_response_code(401);
	echo json_encode(array("message" => "Login failed"));
}

function saveLoggedin($username, $jwt, $conn){
	$query = "update users set Loggedin = '$jwt' where Username = '$username'";
	//$recordquery = "insert into users (Loggedin) VALUES ('Good!')";
	$result = mysqli_query($conn, $query);
	
}

$conn->close();
$temppass = '';

?>