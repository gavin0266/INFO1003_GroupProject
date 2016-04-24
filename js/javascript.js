var mouseCoord = new Object();
var sides = {left: false, right:false, top:false, bottom: false};
var slides = {left: false, right:false, top:false, bottom: false};

function detectScreenEgde(mouseX, mouseY){
	console.log("detectScreenEgde");
	touchEdge(side);
}

function mMove (e) {
		mouseCoord.x = e.pageX;
		mouseCoord.y = e.pageY;
		detectScreenEgde(mouseCoord.x, mouseCoord.y)
	}

$(document).mousemove(mMove);

$(document).ready(function () {
	// body...

	function touchEdge(side){
		showButton();
		console.log("touchEdge");
	}

	function showButton(side){
		onSlideButtonClick(button)
		console.log("showButton");
	}
	
	function onSlideButtonClick(button){
		if (/* button = left */) {
			slide(slideElement, speed, condition);
			slides.left = !slide.left;
		}

		if (/* button = right */) {
			slide(slideElement, speed, condition);
			slides.right = !slide.right;
		}

		if (/* button = top */) {
			if (!condition) {
				$(/* #topButton */).slideDown(1000);
			}
			else{
				$(/* #topButton */).slideUp(1000);
			}
		}

		if (/* button = bottom */) {
			if (!condition) {
				$(/* #bottomButton */).slideUp(1000);
			}
			else{
				$(/* #bottomButton */).slideDown(1000);
			}
		}
		console.log("onSlideButtonClick");
	}

	function slide(slideElement, speed, condition){
		if(!condition){
			slideElement.animate({width: '50%'}, 1000);
		}
		else{
			slideElement.animate({width: 0}, 1000);
		}
	}

});