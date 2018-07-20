<?php
	//Connect to the database
	$dbc = pg_connect("host=soit-db-pro-2.ucc.usyd.edu.au port=5432 dbname=y2016s01g43 user=y2016s01g43 password=Asvv7jat"); 
	
	//Check if informations are filled and sent
	if(isset($_POST["user_name"]) && isset($_POST["user_pass"]) && isset($_POST["user_email"]))
	{
		//Set variables
		$username=$_POST["user_name"];
		$password= hash('sha256', $_POST["user_pass"]);
		$first=$_POST["user_fname"];
		$last=$_POST["user_lname"];
		$gender=$_POST["user_gender"];
		$email=$_POST["user_email"];

		//Check if username already exist
		$result=pg_query($dbc, "SELECT * FROM gp43_user WHERE user_name='$username'");
		$row=pg_fetch_assoc($result);

		//If username doesnt exist
		if(pg_num_rows($result) == 0){
			//Insert to the database
			$query=pg_query($dbc, "INSERT INTO gp43_user(user_name, user_password, user_first, user_last, user_gender, user_email) VALUES ('$username','$password','$first', '$last', '$gender','$email')");
			
			//return result
			if($query)
			{
				echo "done";
			}
			else{
				echo "error";
			}
		}else{
			echo "error";
		}
	}
?>