<?php
require_once "./api.php";
require "../vendor/autoload.php";
require_once "./service.php";
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
$likinguser = $_POST['user'];
}

if($_POST['dislike']){
    Notlike($likedplace, $likinguser);
}

/* THIS PART SHOULD BE MODIFIED. I.E. ONLY USERS EXISTING IN THE DATABASE WILL BE ABLE TO "LIKE" A PLACE 
---------------------------------- OR HERE WILL BE AUTHORIZATION CHECKING SERVICE...-------------------- 
if($_POST['user']){
    $likinguser = $_POST['user'];
} else {
    http_response_code(403);
    echo json_encode(array("message" => "You need to login first to use like feature!")); }
    
$services = new Loginservice();
$services->logged($likinguser, $userkey, $conn);
if($services->fedback()){
    echo "we got true";
} else {
    echo "we got false";
} */

//THIS PART CHANGES A REQUEST BASED ON IF A USER LIKED FOR THE FIRST TIME OR NOT
$usersliked = array();
$likedbeforequery = "select user from userlikes";
$likedbefore = mysqli_query($conn, $likedbeforequery);
if($likedbefore->num_rows){
    for ($i = 0; $i < $likedbefore->num_rows; $i++){
        $theseliked = $likedbefore->fetch_assoc();
        //echo $theseliked[user];
        $usersliked[$i] = $theseliked['user'];
    }
}

if(in_array($likinguser, $usersliked)){
    $query = "select favorites from userlikes where user = '$likinguser'";
    $result = mysqli_query($conn, $query);
    if($result){
        $row = $result->fetch_assoc();

            if (!strpos($row['favorites'], $likedplace)){
                $updatedfavs = $row['favorites'] . ", $likedplace";
                $updating = "update userlikes set favorites = '$updatedfavs' where user = '$likinguser'";
                //echo $updating;
                //$updating = "delete from userlikes"; //FOR DELETING ROWS FROM TABLE FOR EXPRIMENTS 
                $updateres = mysqli_query($conn, $updating);
                if($updateres->num_rows){
                    echo "ok";
                }
                //http_response_code(200);
                echo "ok";
            } else {
                echo "You already liked this place!";
            }
    }
    
    //echo "ok"; //END OF FRAGMENT ======= END  ======= END ======= END ======= END ======= END ======= 
}
//THE BELOW FRAGMENT EVALUATES IF A USER ALREADY LIKED A PLACE OR NOT. IF LIKED IT CANNOT BE ADDED AGAIN
else {
    //$adding = "delete from userlikes"; Below likedplace is entered with space before because strpos function returns zero if string starts with some place name which we are searching for
    $adding = "insert into userlikes (user, favorites) values ('$likinguser', ' $likedplace')";
    //echo $adding;
    $result = mysqli_query($conn, $adding);
    if($result){
        //http_response_code(200);
        echo "ok";
    }
}

function Notlike($likedplace, $likinguser){
    $notlikequery = "hi";
}


?>