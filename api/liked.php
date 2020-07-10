<?php
require_once "./api.php";
require "../vendor/autoload.php";
require_once "./login.php";
use \Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
error_reporting(E_ERROR | E_PARSE);

$conn = mysqli_connect($hn, $un, $pw, $db);

$likinguser = '';
$likedplace = '';
$userkey = '';

if(isset($_POST['liked'])){
	foreach(getallheaders() as $name => $value){
        //echo "$name: $value <br>";
        if($name == 'Authorization'){
            $userkey = $value;
        }
    }
    $likedplace = $_POST['liked'];
}
$likinguser = $_POST['user'];

$query = "select favorites from userlikes where user = '$likinguser'";
$result = mysqli_query($conn, $query);
if($result->num_rows){
    $row = $result->fetch_assoc();
    $updatedfavs = $row['favorites'] . ", $likedplace";
}

$updatequery = "update userlikes set favorites = '$updatedfavs' where user = '$likinguser'";
//$updatequery = "update userlikes set favorites = 'London, Boston' where user = '$likinguser'";
$updateres = mysqli_query($conn, $updatequery);
if($updateres->num_rows){
    $newrow = $updateres->fetch_assoc();
}

http_response_code(200);
echo $newrow['favorites'];
$bool = reallogin();
echo $bool;
echo "ok";


//Favorites. This function returns liked places of a user if any.
/*

$result = mysqli_query($conn, $loginquery);
	if($result){
		http_response_code(200);
		$natija = mysqli_fetch_assoc($result);
		echo $natija['favorites'];
	}

getfavorites(){
	//$natija = mysqli_fetch_assoc($result);
	return $natija['favorites'];
}*/

?>