//operations would begin when it is ready
$(document).ready(function(){

	//wrap the anything the body tag and perform a fading animation
	$("#wrapper").fadeIn(1500);

	function preloader() {

	background1 = new Image(); 
	background1.src = "./svg/backTexture1.svg";

	background2 = new Image(); 
	background2.src = "./svg/backTexture2.svg";

	background3 = new Image(); 
	background3.src = "./svg/backTexture3.svg";

	background4 = new Image(); 
	background4.src = "./svg/backTexture4.svg";
	background = [null,
	background1,
	background2,
	background3,
	background4]

	}

	preloader();
	var clicked = {left: false, right: false, top: false, bottom: false};
	var x = 0;
	var y = 0;
	var mouseCoord = new Object();
	checkButtons();

	//Each tier has it's own clicked in an array e.g. tier 1: clickedArray[0].left
	var clickedArray =
	[null,
	jQuery.extend(true, {}, clicked),
	jQuery.extend(true, {}, clicked),
	jQuery.extend(true, {}, clicked),
	jQuery.extend(true, {}, clicked),
	jQuery.extend(true, {}, clicked)];

	//Once the edge is detected
	function detectScreenEgde(mouseX, mouseY){
		var width = $(document).width()-1;
		var height = $(document).height()-1;
		if(mouseX == 0){
			if (!$('#leftDiv').is(':animated') && !clicked.left) {
			}
			console.log("left");
		}
		if(mouseY == 0){
			if (!$('#topDiv').is(':animated') && !clicked.top) {
			}
			console.log("top");
		}
		if(mouseY == height){
			if (!$('#bottomDiv').is(':animated') && !clicked.bottom) {
			}
			console.log("bottom");
		}
		if(mouseX == width){
			if (!$('#rightDiv').is(':animated') && !clicked.right) {
			}

			console.log(width);
		}
	}

	//Keeping track of mouse movements
	function mMove (e) {
		mouseCoord.x = e.pageX;
		mouseCoord.y = e.pageY;
	}

	//Adding event listeners
	$(document).mousemove(mMove);

	//Arrow keys detection
	$(document).keydown(function(e) {
		switch(e.which) {
			case 39: // left
			if(y == 0 && x != 3){
				x++;
				doSomething();
			}
			break;

			case 40: // up
			if(x == 0 && y != 3){
				y++;
				doSomething();
			}
			break;

			case 37: // right
			if(y == 0 && x != -4){
				x--;
				doSomething();
			}
			break;

			case 38: // down
			if(x == 0 && y != -3){
				y--;
				doSomething();
			}
			break;

			default: return; // exit this handler for other keys
		}
		e.preventDefault(); // prevent the default action (scroll / move caret)
	});

	loadBgCookie();
	function loadBgCookie() {
	/*
	this fucntion has to be out side of the $(document).ready(), because it is onload
	this function look for index of the "state=" if it is == -1 mean it is not exist
	it would load background image 1 as default

	if it is exit it would load background image
	according to the cookie state value when loading the webpage
	*/
	$("#wrapper").css("background-image", "");
	if (document.cookie.indexOf("state=") == -1) {
		$("#wrapper").css("background-image", "url("+background[1].src+")");
	} else {
		var choose = "url("+background[document.cookie.split(";")[0].split("=")[1]].src+")";
		$("#wrapper").css("background-image", choose);
	}

}

	$("#set1").click( function() {
		setCookie123($("#set1").val());
		cookieBackground();
	});

	$("#set2").click( function() {
		setCookie123($("#set2").val());
		cookieBackground();
	});

	$("#set3").click( function() {
		setCookie123($("#set3").val());
		cookieBackground();
	});

	$("#set4").click( function() {
		setCookie123($("#set4").val());
		cookieBackground();
	});

	$("#read").click( function() {
		alert(readCookie());
	});

	function setCookie123(val) {
		/*
		set the cookie to state 1, 2 or 3
		any value bigger then state 3 would be 3
	 	others would be state 1 as default
		*/
		if (document.cookie.indexOf("state=") == -1){

			document.cookie = "state=" + 1;
		} else {

			var state = val;

			if (state > 0 && state < 5) {
				document.cookie = "state=" + state;
			} else if (state > 4) {
				document.cookie = "state=" + 4;
			} else {
				document.cookie = "state=" + 1;
			}

		}
	};

	function readCookie() {
		/*
		get the first cookie"s value which anything after equal("=") sign
		*/
		return document.cookie.split(";")[0].split("=")[1];
	};

	function cookieBackground() {
		//change the background image depend on value of the cookieBackground

		var choose = "url("+ background[document.cookie.split(";")[0].split("=")[1]].src +")";
		
		$("#wrapper").css("background-image", choose);
		$("#wrapper").css("background-size", "100% auto");
		$("#wrapper").css("background-repeat", "no-repeat");
	}

	$( ".navButton" ).each(function() {
		$(this).on( "mouseenter", function() {
			if($(this).attr('src') == './svg/nav.svg'){
				$(this).attr('src', './svg/navActive.svg')
			}
		});

		$(this).on( "mouseleave", function() {
			if($(this).attr('src') == './svg/navActive.svg'){
				$(this).attr('src', './svg/nav.svg')
			}
		});
	});

	function isEmail(email) {
		//check whether the given email is a valid email
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}

	//Expanding wings
	function expandDiv(element, directionClicked, speed, direction1, direction2, condition) {
		if(condition == "horizontal"){
			//expanding the left or right div to the website from the side
			element.stop().animate({left: direction1, top: '0%', height: '100%', width: '75%', opacity: '1.0'}, speed);
			$("#centerNav").hide();
		}else{
			//expanding the top or bottom div
			element.stop().animate({width: '100%', left: '0%', top: direction1, height: '75%', opacity: '1.0'}, speed);
			$("#centerNav").hide();
		}
	}

	//Collapsing wings
	function collapseDiv(element, directionClicked, speed, direction1, direction2, condition) {
		if(condition == "horizontal"){
			//collapsing the left or right div
			element.stop().animate({left: direction2, top: '14%', height: '72%',width: '12%', opacity: '0.0'}, speed);
			$("#centerNav").show();"easeInOutQuart"
		}else{
			//collapse top or bottom div
			element.stop().animate({width: '72%', left: '14%', top: direction2, height: '12%', opacity: '0.0'}, speed);
			$("#centerNav").show();
		}
	}

	//Return false to all clicks in particular tier
	function falseAllClick(index){
		clickedArray[index].left = false;
		clickedArray[index].right = false;
		clickedArray[index].top = false;
		clickedArray[index].bottom = false;
	}

	//Showing particular div content
	function showDiv(div){

		$("#topContent1").hide();
		$("#topContent2").hide();
		$("#topContent3").hide();

		$("#leftContent1").hide();
		$("#leftContent2").hide();
		$("#leftContent3").hide();

		$("#rightContent1").hide();
		$("#rightContent2").hide();
		$("#rightContent3").hide();

		$("#bottomContent1").hide();
		$("#bottomContent2").hide();
		$("#bottomContent3").hide();

		div.show()
	}

	function resetNav() {
		//reset the navigation svgs

		$(".skipLeft3").attr('src', './svg/nav.svg')
		$(".skipLeft2").attr('src', './svg/nav.svg')
		$(".skipLeft1").attr('src', './svg/nav.svg')
		$(".skipCenter").attr('src', './svg/nav.svg')
		$(".skipRight3").attr('src', './svg/nav.svg')
		$(".skipRight2").attr('src', './svg/nav.svg')
		$(".skipRight1").attr('src', './svg/nav.svg')
		$(".skipTop3").attr('src', './svg/nav.svg')
		$(".skipTop2").attr('src', './svg/nav.svg')
		$(".skipTop1").attr('src', './svg/nav.svg')
		$(".skipBottom3").attr('src', './svg/nav.svg')
		$(".skipBottom2").attr('src', './svg/nav.svg')
		$(".skipBottom1").attr('src', './svg/nav.svg')
	}

	//check which div is on and hide the appropriate buttons and show the navigation div
	//for examle if the top div is expanding left and right buttons would hide
	function checkButtons(){
		console.log('Called');

		if (x == -3) {
			$("#leftButton").hide();
			resetNav();
			$(".skipLeft3").attr('src', './svg/navActive2.svg');

		} else if (x == -2) {
			resetNav();
			$(".skipLeft2").attr('src', './svg/navActive2.svg');

		} else if (x == -1) {
			$("#topButton").hide();
			$("#bottomButton").hide();
			resetNav();
			$(".skipLeft1").attr('src', './svg/navActive2.svg');
			console.log('if success');
			console.log($("#skilLeft1").attr('src'))

		} else if ((x == 0) && (y ==0)) {
			$("#leftButton").show();
			$("#rightButton").show();
			$("#topButton").show();
			$("#bottomButton").show();
			resetNav();
			$(".skipCenter").attr('src', './svg/navActive2.svg');

		} else if (x == 1) {
			$("#topButton").hide();
			$("#bottomButton").hide();
			$("#rightButton").show();
			resetNav();
			$(".skipRight1").attr('src', './svg/navActive2.svg');

		} else if (x == 3) {
			$("#rightButton").hide();
			resetNav();
			$(".skipRight3").attr('src', './svg/navActive2.svg');

		} else if (x == 2) {
			resetNav();
			$(".skipRight2").attr('src', './svg/navActive2.svg');

		} else if (y == -1) {
			$("#topButton").show();
			$("#rightButton").hide();
			$("#leftButton").hide();
			resetNav();
			$(".skipTop1").attr('src', './svg/navActive2.svg');

		} else if (y == -2) {
			$("#topButton").show();
			resetNav();
			$(".skipTop2").attr('src', './svg/navActive2.svg');

		} else if (y == -3) {
			$("#topButton").hide();
			resetNav();
			$(".skipTop3").attr('src', './svg/navActive2.svg');

		} else if (y == 1) {
			$("#BottomButton").show();
			$("#rightButton").hide();
			$("#leftButton").hide();
			resetNav();
			$(".skipBottom1").attr('src', './svg/navActive2.svg');

		} else if (y == 2) {
			$("#bottomButton").show();
			$("#rightButton").hide();
			$("#leftButton").hide();
			$("#topButton").show();
			resetNav();
			$(".skipBottom2").attr('src', './svg/navActive2.svg');

		} else if (y == 3) {
			$("#bottomButton").hide();
			$("#topButton").show();
			resetNav();
			$(".skipBottom3").attr('src', './svg/navActive2.svg');
		}
	}

	//this is the function that ajax the content to the correct div
	function doSomething(){

		if(x == -3){
			console.log("load content tier 3");
			$("#leftContentContainer").load("./content.html #leftContent3");
			checkButtons($());
		}
		if(x == 3){
			console.log("load content tier 3");
			$("#rightContentContainer").load("./content.html #rightContent3");
		}
		if(x == -2){
			console.log("load content tier 2");
			$("#leftContentContainer").load("./content.html #leftContent2");
		}
		if(x == 2){
			console.log("load content tier 2");
			$("#rightContentContainer").load("./content.html #rightContent2");
		}
		if(x == -1){
			if(!clickedArray[1].left){
				expandDiv($("#leftDiv"), clickedArray[1].left, 1500 ,"0", "0", "horizontal");
			}
			clickedArray[1].left = !(clickedArray[1].left);
			console.log("load content tier 1");
			$("#leftContentContainer").load("./content.html #leftContent1");
		}
		if(x == 1){
			console.log(clickedArray[1].right)
			if(!clickedArray[1].right){
				expandDiv($("#rightDiv"), clickedArray[1].right, 1500, "25%", "88%", "horizontal");
			}
			clickedArray[1].right = !(clickedArray[1].right);
			console.log("load content tier 1");
			$("#rightContentContainer").load("./content.html #rightContent1");
		}

		if(y == -3){
			console.log("load content tier 3");
			showDiv($("#topContent3"));
		}
		if(y == 3){
			console.log("load content tier 3");
			$("#bottomContentContainer").load("./content.html #bottomContent3");
		}
		if(y == -2){
			console.log("load content tier 2");
			showDiv($("#topContent2"));
		}
		if(y == 2){
			console.log("load content tier 2");
			$("#bottomContentContainer").load("./content.html #bottomContent2");
		}
		if(y == -1){
			if(!clickedArray[1].top){
				expandDiv($("#topDiv"), clickedArray[1].top, 1500, "0%", "0%", "vertical");
			}
			clickedArray[1].top = !(clickedArray[1].top);
			console.log("load content tier 1");
			showDiv($("#topContent1"));
		}
		if(y == 1){
			if(!clickedArray[1].bottom){
				expandDiv($("#bottomDiv"), clickedArray[1].bottom, 1500, "25%", "88%", "vertical");
			}
			clickedArray[1].bottom = !(clickedArray[1].bottom);
			console.log("load content tier 1");
			$("#bottomContentContainer").load("./content.html #bottomContent1");
		}

		if(y == 0 && x == 0){
			collapseAll();
		}
		checkButtons();
	}

	//Button click detection
	$("#leftButton").on('click', function(){

		if(y == 0 && x != -4){
			x--;
			doSomething()
		}
	});

	$("#rightButton").on('click', function(){

		if(y == 0 && x != 3){
			x++;
			doSomething()
		}
	});

	$("#topButton").on('click', function(){

		if(x == 0 && y != -3){
			y--;
			doSomething();
		}
	});

	$("#bottomButton").on('click', function(){

		if(x == 0 && y != 3){
			y++;
			doSomething();
		}
	});

	//we preload the registration and login to avoild delay
	//so we just hide or show the correct information
	$("#registerLink").on('click',function(){
		$("#login").hide();
		$("#register").show();
	});

	$("#loginLink").on('click',function(){
		$("#register").hide();
		$("#login").show();
	});

	$("#feedbackLink").on('click',function(){
		$("#leftSub1").hide();
		$("#feedbackform").show();
	});

	$("#leftSub1Link").on('click',function(){
		$("#leftSub1").show();
		$("#feedbackform").hide();
	});

	//Collapse all divs
	function collapseAll() {
		collapseDiv($("#leftDiv"), clicked.left, 1500 ,"0", "0", "horizontal");
		collapseDiv($("#rightDiv"), clicked.right, 1500, "25%", "88%", "horizontal");
		collapseDiv($("#topDiv"), clicked.left, 1500 ,"0", "0", "vertical");
		collapseDiv($("#bottomDiv"), clicked.right, 1500, "25%", "88%", "vertical");
		falseAllClick(1);
		console.log("collapse all");
	}

	//navigation would set the x or y to 0 which the homepage and go to the chose div
	//we include the situation the when the user choose first div and will play animation
	function whichNav(toX, toY){

		console.log("whichnav called");
		if ((x != toX) && (y != toY)) {

			while (y != 0) {

				if (y < toY) {
					y++;
					doSomething();
					checkButtons();
				} else {
					y--;
					doSomething();
					checkButtons();
				}
			}

			while (x != 0) {

				if (x < toX) {
					x++;
					doSomething();
					checkButtons();
				} else {
					x--;
					doSomething();
					checkButtons();
				}
			}
		}

		while (x != toX) {

			if (x < toX) {
				x++;
				doSomething();
				checkButtons();
			} else {
				x--;
				doSomething();
				checkButtons();
			}
		}

		while (y != toY) {

			if (y < toY) {
				y++;
				doSomething();
				checkButtons();
			} else {
				y--;
				doSomething();
				checkButtons();
			}
		}
	};

	$(document).on('click','#skipCenter',function () {
		collapseAll();
		x = 0;
		y = 0;
		checkButtons();
		console.log("Nav center clicked");
	});

	//if left3 nav button clicked
	$(document).on('click','#skipLeft3',function () {
		whichNav( -3, 0);
		console.log("Nav left clicked");
	});

	//if left2 nav button clicked
	$(document).on('click','#skipLeft2',function () {
		whichNav( -2, 0);
		console.log("Nav left clicked");
	});

	//if left1 nav button clicked
	$(document).on('click','#skipLeft1',function () {
		whichNav( -1, 0);
		console.log("Nav left clicked");
	});

	//if Right3 nav button clicked
	$(document).on('click','#skipRight3',function () {
		whichNav( 3, 0);
		console.log("Nav right clicked");
	});

	//if Right2 nav button clicked
	$(document).on('click','#skipRight2',function () {
		whichNav( 2, 0);
		console.log("Nav right clicked");
	});

	//if Right1 nav button clicked
	$(document).on('click','#skipRight1',function () {
		whichNav( 1, 0);
		console.log("Nav right clicked");
	});

	//if top3 nav button clicked
	$(document).on('click','#skipTop3',function () {
		whichNav( 0, -3);
	});

	//if top2 nav button clicked
	$(document).on('click','#skipTop2',function () {
		whichNav( 0, -2);
		console.log("Nav top clicked");
	});

	//if top1 nav button clicked
	$(document).on('click','#skipTop1',function () {
		whichNav( 0, -1);
		console.log("Nav top clicked");
	});

	//if Bottom3 nav button clicked
	$(document).on('click','#skipBottom3',function () {
		whichNav( 0, 3);
		console.log("Nav bottom clicked");
	});

	//if Bottom2 nav button clicked
	$(document).on('click','#skipBottom2',function () {
		whichNav( 0, 2);
		console.log("Nav bottom clicked");
	});

	//if Bottom1 nav button clicked
	$(document).on('click','#skipBottom1',function () {
		whichNav( 0, 1);
		console.log("Nav bottom clicked");
	});

	//check inccorect information that have been fill up for registration
	$("#confirmRegister").on('click', function(){

		$("#user_gender").val($("input[type='radio'][name='gender']:checked").val())
		var errorMsg = "";
		if($("#register #username").val() == ""){
			errorMsg += "*Empthy Username \n";
		}
		if($("#register #password").val() == ""){
			errorMsg += "*Empthy Password \n";
		}
		if($("#register #password2").val() == ""){
			errorMsg += "*Empthy Confirm Password \n";
		}
		if($("#register #f_name").val() == ""){
			errorMsg += "*Empthy First Name \n";
		}
		if($("#register #l_name").val() == ""){
			errorMsg += "*Empthy Last Name \n";
		}
		if($("#register #user_gender").val() == ""){
			errorMsg += "*Empthy Gender \n";
		}
		if($("#register #password").val() != $("#register #password2").val()){
			errorMsg += "*Password doesn't match \n";
		}
		if($("#register #email").val() == "" || !isEmail($("#register #email").val())){
			errorMsg += "*Not an Email \n";
		}
		if(errorMsg == ""){
			var data = $("#register").serialize();
			$.ajax({
				type: "POST",
				url: "register.php",
				data: data ,
				success: function(html){
					if(html == "done"){
						$("#register").hide();
						$("#login").show();
					}else if(html == "error"){
						errorMsg += "*An error occured during the registration process."
						alert(errorMsg);
					}
				}
			});
		}
		if(errorMsg != "")
			alert(errorMsg);
		return false;
	});

	var logout = false;
	//check the whether the username and password are correct
	//display an error message if it is incorrect
	$("#confirmLogin").on('click', function(){
		var errorMsg = "";
		if($("#login #username").val() == ""){
			errorMsg += "*Empthy Username \n";
		}
		if($("#login #password").val() == ""){
			errorMsg += "*Empthy Password \n";
		}
		var data = $("#login").serialize();
		$("#username").val('');
		$("#password").val('');
		if(errorMsg == ""){
			$.ajax({
				type: "POST",
				url: "login.php",
				data: data ,
				success: function(html){
					if(html == "yeah"){
						$("#login").hide();
						$("#loadInfo p").load("info.php");
						$("#userInfo").show();
					}else{
						alert("nice try");
					}
				}
			});
		}else{
			alert(errorMsg);
		}

		return false;
	});

	//display an error message if have not given a username, email and feedback
	$("#confirmFeedback").on('click', function(){
		var errorMsg = "";
		if($("#feedback #username").val() == ""){
			errorMsg += "*Empthy Username \n";
		}
		if($("#feedback #email").val() == "" || !isEmail($("#feedback #email").val())){
			errorMsg += "*Not an Email \n";
		}
		if($("#feedback #feedbacktext").val() == ""){
			errorMsg += "*Empthy Feedback \n";
		}

		//if no error, feedback will sent
		var data = $("#feedback").serialize();
		if(errorMsg == ""){
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: data ,
				success: function(html){
					if(html == "done"){
						alert("Feedback has been sent.")
					}else{
						alert("There is an error, try again.");
					}
				}
			});
		}else{
			alert(errorMsg);
		}

		return false;
	});

	//ajax the logout message
	$("#logout").on('click', function(){
		$.ajax({
			url: "logout.php",
			success: function(){
				alert("logging out...");
				$("#userInfo").hide();
				$("#login").show();
			}
		});
		return false;
	});

	//upload the profile picture
	$(document).on('click', '#submitPic', function(e){
		e.preventDefault();
		var data = new FormData($("#upload")[0]);
		$.ajax({
			type: "POST",
			url: "upload.php",
			data: data,
			contentType: false,       // The content type used when sending data to the server.
			cache: false,             // To unable request pages to be cached
			processData:false,
			success: function(html){
				$.ajax({
					url: "load_pic.php",
					success: function(url){
						d = new Date();
						$( "#profilePic" ).attr( "src", url+"?"+d.getTime())}
				});
			}

		});
	});

	$(document).on('click','#runMap',function () {
		$("#userInfo").hide();
		$("#mapContainer").show();
		$("#returnFromMap").show();
		initMap("mapContainer");
	});

	$(document).on('click','#returnFromMap',function () {
		$("#userInfo").show();
		$("#mapContainer").hide();
		$("#returnFromMap").hide();
	});

	/*
	GOOGLE MAP API CODE ADAPTED FROM:

		https://developers.google.com/maps/documentation/javascript/tutorials/adding-a-google-map#the_googlemapsmap_object
		https://paulund.co.uk/how-to-use-geolocation-api-with-google-maps

	 MODIFIED BY GROUP 43 APROPRIATELY
	*/

	//initialise the map using the geolocation
	function initMap(element) {

		var mapDiv = document.getElementById(element);
		console.log(mapDiv);
		if (navigator.geolocation) {
		  console.log('Geolocation is supported!');
		  navigator.geolocation.getCurrentPosition(success);

		}
		else {
		  console.log('Geolocation is not supported for this Browser/OS version yet.');
		}

		//it is a callback function when able to ge thte current location
		//it will create the map
		function success(position) {

			var directionsService = new google.maps.DirectionsService();
			var directionsDisplay = new google.maps.DirectionsRenderer();
			console.log("Started the thing");
			var lat = position.coords.latitude;
			var lon = position.coords.longitude;
			var coords = new google.maps.LatLng(lat, lon);
			console.log(coords);

			console.log("Got to the part where we draw the map");
			var map = new google.maps.Map(mapDiv, {
				center: coords,
				zoom: 15,
				navigationControlOptions: {
					style: google.maps.NavigationControlStyle.SMALL
				},
				mapTypeControl: true,
				mapTypeIds: [
			       google.maps.MapTypeId.ROADMAP,
			       google.maps.MapTypeId.SATELLITE
			    ]
			});

			var marker = new google.maps.Marker({
				position: coords,
				map: map,
				title:"You are here!",
			});

			//start from here are the code to create the routine to closest hospital
			var pinIcon = new google.maps.MarkerImage(
				"./svg/blueMarker.png",
				null, /* size is determined at runtime */
				null, /* origin is 0,0 */
				null, /* anchor is bottom center of the scaled image */
				new google.maps.Size(21, 34)
			);

			marker.setIcon(pinIcon);

			var infowindow = new google.maps.InfoWindow();
			var service = new google.maps.places.PlacesService(map);
			service.nearbySearch({
				location: coords,
				radius: 2000,
				type: ['hospital']
			}, callback);

			function callback(results, status) {
				if (status === google.maps.places.PlacesServiceStatus.OK) {
					for (var i = 0; i < results.length; i++) {
						createMarker(results[i]);
					}
					var travel = {
						origin: coords,
						destination: results[0].geometry.location,
						travelMode: google.maps.DirectionsTravelMode.DRIVING
					}
					directionsDisplay.setMap(map);

					directionsService.route(travel, function(result, status) {
						if (status === google.maps.DirectionsStatus.OK) {
							directionsDisplay.setDirections(result);
						}
					});
				}
			}

			function createMarker(place) {
				var placeLoc = place.geometry.location;
				var marker = new google.maps.Marker({
					map: map,
					position: place.geometry.location
			});

			google.maps.event.addListener(marker, 'click', function() {
				infowindow.setContent(place.name);
				infowindow.open(map, this);
				});
			}
			//finding closest hopital end here
		}
	}
});

// API key: AIzaSyAYkt7TanTFkRFNKn9TwCCuZIMphlgzqfM
