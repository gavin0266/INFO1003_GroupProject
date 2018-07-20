<?php
//Start the session if not set
if(!isset($_SESSION)) {
	session_start();
};

//Connect to the database
$dbc = pg_connect("host=soit-db-pro-2.ucc.usyd.edu.au port=5432 dbname=y2016s01g43 user=y2016s01g43 password=Asvv7jat"); 

//Show info if the name is set (Login)
if(isset($_SESSION["name"])){ ?>
<?php echo "Welcome {$_SESSION["name"]}!<br><br>"; ?>
<?php  
$userid = $_SESSION["id"];
//Find the user information from user_id
$result=pg_query($dbc, "SELECT * FROM gp43_user WHERE user_id='$userid'");
$row=pg_fetch_assoc($result);

if(pg_num_rows($result) == 1){
	$profilepic =  $row['user_pic'];

}
//Display information from the database
//Upload profile picture
?>
<img id="profilePic" style="max-width: 20%; max-height:25vh" alt="No Profile Picture" <?php echo "src='{$profilepic}'"; ?> ></img>
<form action="upload.php" method="post" id="upload" enctype="multipart/form-data">
    Upload Profile Picture:
    <input type="file" name="fileToUpload" id="fileToUpload">
    <input type="submit" id="submitPic" value="Upload Image" name="submit">
 </form>
<?php 
//Display information
	echo "<h3>Your Personal Information</h3><br>";
	echo "User ID: {$_SESSION["id"]}<br>";
	echo "Username: {$_SESSION["name"]}<br>";
	echo "First Name: {$_SESSION["f_name"]}<br>";
	echo "Last Name: {$_SESSION["l_name"]}<br>";
	echo "Gender: {$_SESSION["gender"]}<br>";
	echo "Email Address: {$_SESSION["email"]}<br><br>";
?>
<button class="confirm" id="runMap" type="button">Show Nearby Healthcare Centres</button> <br><br>
<?php } ?>
