<?php
//Connect to the database
$dbc = pg_connect("host=soit-db-pro-2.ucc.usyd.edu.au port=5432 dbname=y2016s01g43 user=y2016s01g43 password=Asvv7jat"); 
	//If the information is sent from index.php
	if(isset($_POST["feedback_name"]) && isset($_POST["feedback_email"]))
	{
		//Insert information to the database
		$username=$_POST["feedback_name"];
		$email=$_POST["feedback_email"];
		$text = $_POST["feedback_text"];
		$query=pg_query($dbc, "INSERT INTO gp43_feedback(feedback_name, feedback_email, feedback_text) VALUES ('$username','$email','$text')");
		
		//Return result
		if($query){
			echo "done";
		}else{
			echo "error";
		}
	}
?>