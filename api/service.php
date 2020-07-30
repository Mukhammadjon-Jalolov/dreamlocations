<?php

class Loginservice {
	
	private $username;
	private $key;
	private $dbkey;

	function logged($username, $key, $conn){
		$query = "select Loggedin from users where Username = '$username'";
		$result = mysqli_query($conn, $query);
		$this->key = $key;
		if($result->num_rows){
			$row = $result->fetch_assoc();
			$this->dbkey = $row['Loggedin'];
		} else {
			return "database error";
		}
	}

	function fedback(){
		if ($this->dbkey == $this->key){
			return true;
		} else {
			return false;
		}
	}
}

class Likedservice {
	private $currentplace = '';
	private $fav = '';

	function didlike($conn, $tempres, $userkey, $currentuser){
		$this->currentplace = $tempres->name;
		
		$query = "select favorites from userlikes where user = '$currentuser'";
		$result = mysqli_query($conn, $query);

		if($result->num_rows){
			$row = $result->fetch_assoc();
			$this->fav = $row['favorites'];
		}
		
		if(strpos($this->fav, $this->currentplace)){
			return true;
		} else {
			return false;
		}
	}

}

?>