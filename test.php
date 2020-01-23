<?php
header('Access-Control-Allow-Origin: *');	// It should be enabled if you are working on local server

require_once 'login.php';

$method = $_SERVER['REQUEST_METHOD'];

/*$status = "Connected!";

if($method == 'GET'){
	echo $status;
}
*/


$conn = mysqli_connect($hn, $un, $pw, $db);
if ($conn->connect_error) die ($conn->connect_error);

/*
if(!$conn){
	die('Could not connect to DB ' . mysql_error());
}
*/
//echo 'Connected well';

$query = "select * from places";
$result = mysqli_query($conn, $query);

$info = array();

echo '[';
for ($i = 0; $i < mysqli_num_rows($result); $i++){

	//array_push($info, mysqli_fetch_object($result));
	echo ($i>0?',':'');
	echo json_encode(mysqli_fetch_object($result));
}

echo ']';


/*

$rows = $result->num_rows;
for ($j = 0; $j < $rows; ++$j){
	$result->data_seek($j);
	echo $result->fetch_assoc()['continent'] . '<br>';
	$result->data_seek($j);
	echo $result->fetch_assoc()['country'] . '<br>';
	$result->data_seek($j);
	echo $result->fetch_assoc()['name'] . '<br>';
	$result->data_seek($j);
	echo $result->fetch_assoc()['description'] . '<br>';
	$result->data_seek($j);
	echo $result->fetch_assoc()['landscapes'] . '<br>';
	$result->data_seek($j);
	echo $result->fetch_assoc()['images'] . '<br><br>';
}

*/






?>