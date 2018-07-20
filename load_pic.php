<?php
//Start the session if not set
if(!isset($_SESSION)) {
	session_start();
};
//Connect to the database
$dbc = pg_connect("host=soit-db-pro-2.ucc.usyd.edu.au port=5432 dbname=y2016s01g43 user=y2016s01g43 password=Asvv7jat"); 
$userid = $_SESSION["id"];
//Get the profile picture file path
$result=pg_query($dbc, "SELECT * FROM gp43_user WHERE user_id='$userid'");
$row=pg_fetch_assoc($result);
if(pg_num_rows($result) == 1){
	$profilepic =  $row['user_pic'];
	echo $profilepic;
}
?>