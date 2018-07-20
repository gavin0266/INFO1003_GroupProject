<?php 
//Start the session if not set
if(!isset($_SESSION)) {
    session_start();
};

?>
<!DOCTYPE html>
<html>

<head>
	<?php 
		//Connect to the database
		$dbc = pg_connect("host=soit-db-pro-2.ucc.usyd.edu.au port=5432 dbname=y2016s01g43 user=y2016s01g43 password=Asvv7jat"); 
		$str = $_SERVER['QUERY_STRING'];
		parse_str($str);
	?>
	<title>Tresko</title>
	<link rel="shortcut icon" href="svg/favicon.ico" type="image/x-icon" />
	<script src="https://code.jquery.com/jquery-latest.js"></script>
	<script type="text/javascript" src="https://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js?sensor=true&key=AIzaSyAYkt7TanTFkRFNKn9TwCCuZIMphlgzqfM&libraries=places"></script>
	<link rel="stylesheet" type="text/css" href="css/reset.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script src="js/js.js"></script>

</head>

<body >
<div id="wrapper" style="display:none">

	<div class="edgeDiv" id="topDiv">

		<div class="form content" id="topContent1">
			<form id="login" method="post" action="">
				<h2>Login</h2> <br>
				Username: <input id="username" name="user_name" placeholder="Your username"/> <br>
				Password: <input id="password" name="user_pass" type="password" placeholder="Your password"/> <br> <br> <br>
				<button class="confirm" id="confirmLogin" type="submit">Confirm</button> <br> <br> <br>
				<a href="#" id="registerLink">Don't have an account? Click here!</a>

			</form>
			
			<form id="register" method="post" action="register.php" >
				<h2>Register</h2> <br>
				Username: <input id="username" name="user_name" placeholder="The username you want"/> <br>
				Password: <input id="password" name="user_pass" type="password" placeholder="The password you want"/> <br>
				Confirm Password: <input id="password2" name="user_pass2" type="password" placeholder="Password again"/> <br>
				First Name: <input id="f_name" name="user_fname" placeholder="Your First Name"/> <br>
				Last Name: <input id="l_name" name="user_lname" placeholder="Your Last Name"/> <br>
				Gender: <input type="radio" name="gender" value="M"> M <input type="radio" name="gender" value="F"> F<br>
				<input type="hidden" name="user_gender" id="user_gender" value="" />
				Email: <input id="email" name="user_email" placeholder="Email address"/> <br> <br> <br>
				<button class="confirm" id="confirmRegister" name="confirmRegister" type="submit">Confirm</button> <br> <br> <br>
				<a href="#" id="loginLink">Return</a>

			</form>
			

			<div id="userInfo" style="display:none;"><div id="loadInfo"><p></p>
			Select Background: <br>
			<input src="svg/backTexture1.svg" style="width: 5%; height: 5%" alt="submit" type="image" id="set1" class="set" value="1"></input>
			<input src="svg/backTexture2.svg" style="width: 5%; height: 5%" alt="submit" type="image" id="set2" class="set" value="2"></input>
			<input src="svg/backTexture3.svg" style="width: 5%; height: 5%" alt="submit" type="image" id="set3" class="set" value="3"></input>
			<input src="svg/backTexture4.svg" style="width: 5%; height: 5%" alt="submit" type="image" id="set4" class="set" value="4"></input></div>
<button class="confirm" id="logout">LOG OUT</button></div>
			<?php if(!isset($_SESSION["id"])){ ?>
			<script type="text/javascript">
				$("#userInfo").hide();
				$("#login").show();
			</script>
			<?php }else{ ?>
			<script type="text/javascript">
				$("#loadInfo p").load("info.php");
				$("#userInfo").show();
				$("#login").hide();
			</script>
			<?php } ?>
			<div id="mapContainer" class="mapContent" style="display:none;"></div>
			<div id="returnFromMap"><button class="confirm" id="returnMapButton" type="button">Return</button></div>
		</div>



		<div class="content" id="topContent2">
		<div id="leftSub1">
			<div id="aboutUs" >
			<h2>About Us</h2>
			<br><br>

			<h3>Emosi Derek Tabuasei Liu</h3><br>
			<p>Role: Director, Developer, Co-ordinator, QA and Lead Research</p>
			<p>Unikey: etab0834</p>
			<p>SID: 460360290</p>
			<p>Email: liuderek97@gmail.com</p>
			<p>Phone: 0407704036</p>
			<br>

			<h3>Gavin Fungtammasan</h3><br>
			<p>Role: Director, Scribe, Developer and JavaScript lead</p>
			<p>Unikey: gfun5990</p>
			<p>SID: 460355458</p>
			<p>Email: gavin.kiwi@gmail.com</p>
			<p>Phone: 0468395035</p>
			<br>

			<h3>Jiefeng Zhen</h3><br>
			<p>Role: Developer, QA, Editor and Research</p>
			<p>Unikey: jzhe3972</p>
			<p>SID: 460371089</p>
			<p>Email: jayzhen2009@hotmail.com</p>
			<p>Phone: 0404549428</p>
			<br>

			<h3>Cory Matthew Robinson</h3><br>
			<p>Role: Design lead, Director, Co-ordinator, Developer and Co-JavaScript</p>
			<p>Unikey: crob2406</p>
			<p>SID: 460371311</p>
			<p>Email: crob2406@uni.sydney.edu.au</p>
			<p>Phone: 0478012961</p>
			<br>

			<h3>Chuangxu Chen</h3><br>
			<p>Role: Video lead, Developer and Researcher</p>
			<p>Unikey: cche8335</p>
			<p>SID: 460035192</p>
			<p>Email: keinemagica@gmail.com</p>
			<p>Phone: 0434375626</p>
			</div>
			<div id="contactUs">
			<h2>Contact Us</h2><br><br>
			<h3>Phone</h3><br>
			<p>For personal enquires or support, 24 hours a day, 7 days a week.
			24 hour contact number: 0407704036<p><br>
			<h3>Email</h3><br>
			<p>
				General information: jayzhen2009@hotmail.com<br>
				Privacy: crob2406@uni.sydney.edu.au<br>
				Account Problems: gavin.kiwi@gmail.com<br>
				Other: liuderek97@gmail.com<br>
			</p><br>
			<h3>For More Information</h3><br>
			<p><a href="https://youtu.be/y1wbMBQXit4">Youtube Video</a></p><br>
			<h3>Feedback</h3><br>
			<p>Phone: 0478012961<br>
			E-mail: crob2406@uni.sydney.edu.au<br>
			<a href="#" id="feedbackLink">Submit a feedback form</a>
			</p><br>

			</div>
		</div>
		<div id="feedbackform">
			<form id="feedback" method="post" action="mail.php">
				<h2>Feedback Form</h2> <br>
				<div style="margin: 1%">Name: 
				<input id="username" name="feedback_name" placeholder="Your name"/> <br>
				Email: <input id="email" name="feedback_email" placeholder="Your Email"/> </div>
				<div style="display:inline-block">Feedback: </div><textarea  id="feedbacktext" name="feedback_text" style="max-width: 96%; width: 96%" placeholder="Your feedback here!"></textarea> <br>
				<button class="confirm" id="confirmFeedback" type="submit">Confirm</button> <br> <br> <br>

			</form>
			<a href="#" id="leftSub1Link">Return</a>
		</div>
		</div>

		<div class="content" id="topContent3">
			<h2>FAQ</h2><br><br>
		<p><h3>Q: How to use this website? (How does it work?)</h3></p><br />
		<p>A: The website is a centralised site with a 4-directional layout, which means that there will be subpages/wings on each side of the screen. Each individual wing contains a grouped information which are displayed one at a time on each tier. The user can navigate around multiple tiers and wings using buttons or arrow keys.</p><br />

		<p>For more information on navigation: <a href="#faq_navigate">How can I navigate around pages/wings?</a></p>
		<br><br>
		<p id="faq_navigate"><h3>Q: How can I navigate around pages/wings?</h3><br /></p>
		<p>A: To navigate around, use either buttons provided on the website or arrow keys. Buttons/Keys explanation:</p><br />
		<ul>
			<li>Left button/Right key: moving 1 tier to the left of the center.</li><br />
			<li>Right button/Left key: moving 1 tier to the right of the center.</li><br />
			<li>Top button/Down key: moving 1 tier above the center.</li><br />
			<li>Bottom button/Up key: moving 1 tier below the center.</li>
		</ul></p><br><br>
		<p><h3>Q: Why is the website so slow?</h3></p><br />
		<p>A: Some browsers (e.g. Google Chrome) may not be able to render the background properly, which causes serious delays/lags. We apologise for the inconvenience and will resolve the issue ASAP.</p><br><br>

		<p><h3>Q: How can I create an account?</h3></p><br />
		<p>A: Currently we do not provide the create an account functionality but this will be implemented soon!</p><br><br>

		<p><h3>Q: What is the purpose of this website?</h3></p><br />
		<p>A: Refer to the about us page.</p><br><br>

		<p><h3>Q: Is my information safe? (Privacy Policy)</h3></p><br />
		<p>A: Our website will feature basic statistic tracking, and data gathering from the user, with information including user age, gender and location. We also acknowledge that, whilst we don't directly ask for identifying information about the user such as names or passwords for other services, that such information may come into our possession through use of username or password fields. In any such case, all user information gathered will be maintained in manners befitting the utmost secure nature of such information, and will not be used or transferred in any purpose other than the intended use of the site – tracking the statistics and providing targeted information for the users.
</p><br>

		</div>

		<div class="navDiv" id="topNav">
			<input type="image" id="skipCenter" src="svg/nav.svg" alt="submit" class="centerimg navButton skipCenter" />
			<input type="image" id="skipLeft1" src="svg/nav.svg" alt="submit" class="centerimg navButton skipLeft1" />
			<input type="image" id="skipLeft2" src="svg/nav.svg" alt="submit" class="centerimg navButton skipLeft2" />
			<input type="image" id="skipLeft3" src="svg/nav.svg" alt="submit" class="centerimg navButton skipLeft3" />
			<input type="image" id="skipRight1" src="svg/nav.svg" alt="submit" class="centerimg navButton skipRight1" />
			<input type="image" id="skipRight2" src="svg/nav.svg" alt="submit" class="centerimg navButton skipRight2" />
			<input type="image" id="skipRight3" src="svg/nav.svg" alt="submit" class="centerimg navButton skipRight3" />
			<input type="image" id="skipTop1" src="svg/nav.svg" alt="submit" class="centerimg navButton skipTop1" />
			<input type="image" id="skipTop2" src="svg/nav.svg" alt="submit" class="centerimg navButton skipTop2" />
			<input type="image" id="skipTop3" src="svg/nav.svg" alt="submit" class="centerimg navButton skipTop3" />
			<input type="image" id="skipBottom1" src="svg/nav.svg" alt="submit" class="centerimg navButton skipBottom1" />
			<input type="image" id="skipBottom2" src="svg/nav.svg" alt="submit" class="centerimg navButton skipBottom2" />
			<input type="image" id="skipBottom3" src="svg/nav.svg" alt="submit" class="centerimg navButton skipBottom3" />
		</div>

	</div>
				<!-- <button class="dirButton" id="topButton" type="button"><img src="svg/button1.svg" class="rotate270 centerimg" width="200%" height="200%" alt="submit" /></button> -->

	<input type="image" id="topButton" src="svg/button1.svg" alt="submit" class="centerimg rotate90" />

	<div class="edgeDiv" id="leftDiv">
	<div id="leftContentContainer"></div>
	<div class="navDiv" id="leftNav">
			<input type="image" id="skipCenter" src="svg/nav.svg" alt="submit" class="centerimg navButton skipCenter" />
			<input type="image" id="skipLeft1" src="svg/nav.svg" alt="submit" class="centerimg navButton skipLeft1" />
			<input type="image" id="skipLeft2" src="svg/nav.svg" alt="submit" class="centerimg navButton skipLeft2" />
			<input type="image" id="skipLeft3" src="svg/nav.svg" alt="submit" class="centerimg navButton skipLeft3" />
			<input type="image" id="skipRight1" src="svg/nav.svg" alt="submit" class="centerimg navButton skipRight1" />
			<input type="image" id="skipRight2" src="svg/nav.svg" alt="submit" class="centerimg navButton skipRight2" />
			<input type="image" id="skipRight3" src="svg/nav.svg" alt="submit" class="centerimg navButton skipRight3" />
			<input type="image" id="skipTop1" src="svg/nav.svg" alt="submit" class="centerimg navButton skipTop1" />
			<input type="image" id="skipTop2" src="svg/nav.svg" alt="submit" class="centerimg navButton skipTop2" />
			<input type="image" id="skipTop3" src="svg/nav.svg" alt="submit" class="centerimg navButton skipTop3" />
			<input type="image" id="skipBottom1" src="svg/nav.svg" alt="submit" class="centerimg navButton skipBottom1" />
			<input type="image" id="skipBottom2" src="svg/nav.svg" alt="submit" class="centerimg navButton skipBottom2" />
			<input type="image" id="skipBottom3" src="svg/nav.svg" alt="submit" class="centerimg navButton skipBottom3" />
		</div>	
	</div>
		<!-- <button class="dirButton" id="leftButton" type="button">left</button> -->
	<input type="image" id="leftButton" src="svg/button1.svg" alt="submit" class="centerimg" />

	<div class="edgeDiv" id="rightDiv">
	<div id="rightContentContainer"></div>
		<div class="navDiv" id="rightNav">
			<input type="image" id="skipCenter" src="svg/nav.svg" alt="submit" class="centerimg navButton skipCenter" />
			<input type="image" id="skipLeft1" src="svg/nav.svg" alt="submit" class="centerimg navButton skipLeft1" />
			<input type="image" id="skipLeft2" src="svg/nav.svg" alt="submit" class="centerimg navButton skipLeft2" />
			<input type="image" id="skipLeft3" src="svg/nav.svg" alt="submit" class="centerimg navButton skipLeft3" />
			<input type="image" id="skipRight1" src="svg/nav.svg" alt="submit" class="centerimg navButton skipRight1" />
			<input type="image" id="skipRight2" src="svg/nav.svg" alt="submit" class="centerimg navButton skipRight2" />
			<input type="image" id="skipRight3" src="svg/nav.svg" alt="submit" class="centerimg navButton skipRight3" />
			<input type="image" id="skipTop1" src="svg/nav.svg" alt="submit" class="centerimg navButton skipTop1" />
			<input type="image" id="skipTop2" src="svg/nav.svg" alt="submit" class="centerimg navButton skipTop2" />
			<input type="image" id="skipTop3" src="svg/nav.svg" alt="submit" class="centerimg navButton skipTop3" />
			<input type="image" id="skipBottom1" src="svg/nav.svg" alt="submit" class="centerimg navButton skipBottom1" />
			<input type="image" id="skipBottom2" src="svg/nav.svg" alt="submit" class="centerimg navButton skipBottom2" />
			<input type="image" id="skipBottom3" src="svg/nav.svg" alt="submit" class="centerimg navButton skipBottom3" />
		</div>

	</div>
		<!-- <button class="dirButton" id="rightButton" type="button">right</button> -->

	<input type="image" id="rightButton" src="svg/button1.svg" alt="submit" class="centerimg rotate180" />

	<div class="edgeDiv" id="bottomDiv">
	<div id="bottomContentContainer"></div>
		<div class="navDiv" id="bottomNav">
			<input type="image" id="skipCenter" src="svg/nav.svg" alt="submit" class="centerimg navButton skipCenter" />
			<input type="image" id="skipLeft1" src="svg/nav.svg" alt="submit" class="centerimg navButton skipLeft1" />
			<input type="image" id="skipLeft2" src="svg/nav.svg" alt="submit" class="centerimg navButton skipLeft2" />
			<input type="image" id="skipLeft3" src="svg/nav.svg" alt="submit" class="centerimg navButton skipLeft3" />
			<input type="image" id="skipRight1" src="svg/nav.svg" alt="submit" class="centerimg navButton skipRight1" />
			<input type="image" id="skipRight2" src="svg/nav.svg" alt="submit" class="centerimg navButton skipRight2" />
			<input type="image" id="skipRight3" src="svg/nav.svg" alt="submit" class="centerimg navButton skipRight3" />
			<input type="image" id="skipTop1" src="svg/nav.svg" alt="submit" class="centerimg navButton skipTop1" />
			<input type="image" id="skipTop2" src="svg/nav.svg" alt="submit" class="centerimg navButton skipTop2" />
			<input type="image" id="skipTop3" src="svg/nav.svg" alt="submit" class="centerimg navButton skipTop3" />
			<input type="image" id="skipBottom1" src="svg/nav.svg" alt="submit" class="centerimg navButton skipBottom1" />
			<input type="image" id="skipBottom2" src="svg/nav.svg" alt="submit" class="centerimg navButton skipBottom2" />
			<input type="image" id="skipBottom3" src="svg/nav.svg" alt="submit" class="centerimg navButton skipBottom3" />
		</div>

	</div>

		<!-- <button class="dirButton" id="bottomButton" type="button">bottom</button> -->
	<input type="image" id="bottomButton" src="svg/button1.svg"alt="submit" class="centerimg rotate270" />

	<div class="edgeDiv" id="centerNav">
			<input type="image" id="skipCenter" src="svg/nav.svg" alt="submit" class="centerimg navButton skipCenter" />
			<input type="image" id="skipLeft1" src="svg/nav.svg" alt="submit" class="centerimg navButton skipLeft1" />
			<input type="image" id="skipLeft2" src="svg/nav.svg" alt="submit" class="centerimg navButton skipLeft2" />
			<input type="image" id="skipLeft3" src="svg/nav.svg" alt="submit" class="centerimg navButton skipLeft3" />
			<input type="image" id="skipRight1" src="svg/nav.svg" alt="submit" class="centerimg navButton skipRight1" />
			<input type="image" id="skipRight2" src="svg/nav.svg" alt="submit" class="centerimg navButton skipRight2" />
			<input type="image" id="skipRight3" src="svg/nav.svg" alt="submit" class="centerimg navButton skipRight3" />
			<input type="image" id="skipTop1" src="svg/nav.svg" alt="submit" class="centerimg navButton skipTop1" />
			<input type="image" id="skipTop2" src="svg/nav.svg" alt="submit" class="centerimg navButton skipTop2" />
			<input type="image" id="skipTop3" src="svg/nav.svg" alt="submit" class="centerimg navButton skipTop3" />
			<input type="image" id="skipBottom1" src="svg/nav.svg" alt="submit" class="centerimg navButton skipBottom1" />
			<input type="image" id="skipBottom2" src="svg/nav.svg" alt="submit" class="centerimg navButton skipBottom2" />
			<input type="image" id="skipBottom3" src="svg/nav.svg" alt="submit" class="centerimg navButton skipBottom3" />
			<p class="navText log">Login</p>
			<p class="navText abo">About us</p>
			<p class="navText mat">Mature</p>
			<p class="navText you">Youth</p>
			<p class="navText mid">Middle Age</p>
			<p class="navText chi">Children</p>
		</div>

</body>

<html>
