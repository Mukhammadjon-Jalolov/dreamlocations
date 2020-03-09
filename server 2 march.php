<?php
header('Access-Control-Allow-Origin: *');	// It should be enabled if you are working on local server
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');
//error_reporting(E_ERROR | E_PARSE);

require_once 'login.php';

$method = $_SERVER['REQUEST_METHOD'];

$query = "";
$conn = mysqli_connect($hn, $un, $pw, $db);
$truecont = "";
$truelands = "";
$continentstosend = array();
$landscapestosend = array();


if($method == 'POST'){
	
	if(isset($_POST['continent'])){
		$cont = $_POST['continent'];
		foreach($cont as $item){
			if($item['val'] == 'true'){
				array_push($continentstosend, $item);
			}
		}

		for($y = 0; $y < count($continentstosend); $y++){
			// At the beginning I had this code. But it seems and is redundant. Cause true validation is above!
			//if($continentstosend[$y]['val'] === 'true'){
			//	$truecont = $truecont . "continent = '" . $continentstosend[$y]['continent']. "'" .(($y < count($continentstosend)-1)?' OR ':'');
			//}
			$truecont = $truecont . "continent = '" . $continentstosend[$y]['continent']. "'" .(($y < count($continentstosend)-1)?' OR ':'');
		}
	}

	if(isset($_POST['landscape'])){
		$land = $_POST['landscape'];

		foreach($land as $item){
			if($item['val'] === 'true'){
				array_push($landscapestosend, $item);
			}
		}

		for($y = 0; $y < count($landscapestosend); $y++){
			$truelands = $truelands . "landscapes LIKE '%" . $landscapestosend[$y]['landtype']. "%'". (($y < count($landscapestosend)-1)?' AND ':'');
		}
	}

	//$query = "select * from places " .((count($continentstosend) != 0)?"where $truecont":'')
	
	//$query = "select * FROM places where (continent = 'Asia' OR continent = 'Europe' OR continent = 'South America') AND (landscapes LIKE '%history%' AND landscapes LIKE '%skyscrapers%')";
	
	/*if(count($landscapestosend) != 0){ // This validation is to check weather $truecont has correct string
		$query = "select * FROM places where $truelands";
		Somedata($conn, $query);
	} */
	//$query = "select * FROM places where continent = 'Europe' AND landscapes LIKE '%history%'";
	if(count($continentstosend) != 0){
		$query = "select * FROM places where ($truecont)";
	} elseif(count($landscapestosend) != 0){
		$query = "select * FROM places where ($truelands)";
	}

	if(count($continentstosend) != 0 and count($landscapestosend) != 0){
		$query = "select * FROM places where ($truecont) AND ($truelands)";
	}

	if(count($continentstosend) != 0 or count($landscapestosend) != 0){
		Somedata($conn, $query);
	}

} else {
	Alldata($conn);
}

function Alldata($conn){

//$conn = mysqli_connect($hn, $un, $pw, $db);
if ($conn->connect_error) die ($conn->connect_error);


$query = "select * from places";
$result = mysqli_query($conn, $query);

echo '[';
for ($i = 0; $i < mysqli_num_rows($result); $i++){
	echo ($i>0?',':'');
	//echo mysqli_num_rows($result);
	echo json_encode(mysqli_fetch_object($result));
}
echo ']';

echo 'separatorplace';

$query = "select * from places";
$result = mysqli_query($conn, $query);


echo '[';
for ($i = 0; $i < mysqli_num_rows($result); $i++){
	echo ($i>0?', ':'');
	$split = explode(", " , mysqli_fetch_object($result)->images);
	//print_r($split);
	echo '{';
	echo '"pictures":';
	echo '[';
	
	$y = 0;
	while ($y < count($split)) {
		$param = $split[$y];	//array of each place! Don`t delete!
		echo ($y>0?',':'');	//Required

		echo '{';
		$image = file_get_contents($param);				//Reads EACH and EVERY Image!
		echo '"img":"'.base64_encode($image);	//echoes base64 strings of all images!
		
		echo '"}';
		$y++;
	}
	
	echo ']}';
}
echo ']'; 

}


function Somedata($conn, $query){
	//$conn = mysqli_connect($hn, $un, $pw, $db);
	if ($conn->connect_error) die ($conn->connect_error);
	
	$localquery = $query;
	
	$result = mysqli_query($conn, $localquery);
	
	echo '[';
	for ($i = 0; $i < mysqli_num_rows($result); $i++){
		echo ($i>0?',':'');
		echo json_encode(mysqli_fetch_object($result));
	}
	echo ']';
	
	echo 'separatorplace';
	
	
	$result = mysqli_query($conn, $localquery);
	
	
	echo '[';
	for ($i = 0; $i < mysqli_num_rows($result); $i++){
		echo ($i>0?', ':'');
		$split = explode(", " , mysqli_fetch_object($result)->images);
		//print_r($split);
		echo '{';
		echo '"pictures":';
		echo '[';
		
		$y = 0;
		while ($y < count($split)) {
			$param = $split[$y];	//array of each place! Don`t delete!
			echo ($y>0?',':'');	//Required
	
			echo '{';
			$image = file_get_contents($param);				//Reads EACH and EVERY Image!
			echo '"img":"'.base64_encode($image);	//echoes base64 strings of all images!
			
			echo '"}';
			$y++;
		}
		
		echo ']}';
	}
	echo ']';
	
	}

?>