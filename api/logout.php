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
$userkey = '';

if(isset($_POST['user'])){
	foreach(getallheaders() as $name => $value){
        //echo "$name: $value <br>";
        if($name == 'Authorization'){
            $userkey = $value;
        }
    }
	$username = $_POST['user'];
	logoutUser($userkey, $username, $conn);
}

/*This part clears user JWT from the DB. i.e. Records user`s logout
*/

function logoutUser($userkey, $username, $conn){
	$query = "select Username, Loggedin from users where Username = '$username'";
	$clearquery = "update users set Loggedin = '' where Username = '$username'";

	$result = mysqli_query($conn, $query);
	if($result){
		$row = $result->fetch_assoc();
		if($row['Username'] == $username){
			$nextresult = mysqli_query($conn, $clearquery);
			echo "ok";
		}
	} 
}

$conn->close();

?>