<?php
//Start session if not set
if(!isset($_SESSION)) {
	session_start();
};

//Set directory
$target_dir = "user_pic/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}

if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
	$temp = explode(".", $_FILES["fileToUpload"]["name"]);
	$newname = "user_{$_SESSION["id"]}." . end($temp);
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_dir . $newname)) {
        echo basename( $target_dir . $newname);
        //upload to database
        $dbc = pg_connect("host=soit-db-pro-2.ucc.usyd.edu.au port=5432 dbname=y2016s01g43 user=y2016s01g43 password=Asvv7jat"); 
        $newdir = $target_dir . $newname;
			$userid = $_SESSION["id"];
			$query=pg_query($dbc, "UPDATE gp43_user SET user_pic = '$newdir' WHERE user_id='$userid'");

    } else {
        echo "false";
    }
}
?> 