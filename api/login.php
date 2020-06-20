<?php
require "../vendor/autoload.php";
require_once "./api.php";
use \Firebase\JWT\JWT;


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
error_reporting(E_ERROR | E_PARSE);

$conn = mysqli_connect($hn, $un, $pw, $db);

$username = '';
$password = '';

$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$password = $data->password;


$usr = "usr";
$pwd = "pwd";
$temppass = '';

$query = "select * from users where username = " . $username;
$result = mysqli_query($conn, $query);
if($result){
	$temppass = $result->mysql_fetch_assoc()['password'];
} else {
	http_response_code(401);
	echo json_encode(array("message" => "Incorrect Password or Username"));
}

$conn->close();

if(password_verify($password, password_hash($temppass, PASSWORD_DEFAULT))){
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
	echo json_encode(
		array(
			"message" => "Successful login",
			"jwt" => $jwt,
			"expireAt" => $expire_claim
		));
}
else {
	http_response_code(401);
	echo json_encode(array("message" => "Login failed"));
}

$temppass = '';

?>