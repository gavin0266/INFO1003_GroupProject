<?php
	//Start the session
	session_start();
	//Connect to the database
	$dbc = pg_connect("host=soit-db-pro-2.ucc.usyd.edu.au port=5432 dbname=y2016s01g43 user=y2016s01g43 password=Asvv7jat"); 
	
	//If the username and password has been sent from index.php
	if(isset($_POST["user_name"]) && isset($_POST["user_pass"]))
	{
		$username=$_POST["user_name"];
		//Encrypt the password
		$password=hash('sha256', $_POST["user_pass"]);
		
		//Find a matched username and password in the database
		$result=pg_query($dbc, "SELECT * FROM gp43_user WHERE user_name='$username' AND user_password='$password'");
		$row=pg_fetch_assoc($result);
		
		//The result must be exactly 1
		if(pg_num_rows($result) == 1)
		{
			//return success
			echo "yeah";
			//Store informations in session
			$_SESSION['name'] = $row['user_name'];
			$_SESSION['id'] = $row['user_id'];
			$_SESSION['f_name'] = $row['user_first'];
			$_SESSION['l_name'] = $row['user_last'];
			$_SESSION['gender'] = $row['user_gender'];
			$_SESSION['email'] = $row['user_email'];

		}
		else{
			//return error
			echo "nah";
		}
	}
?>