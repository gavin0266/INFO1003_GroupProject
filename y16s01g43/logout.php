<?php 
session_start();
if(isset($_SESSION)) {
	//Destroy session
	session_unset();
	session_destroy(); 
	header("Location: index.php");
}?>