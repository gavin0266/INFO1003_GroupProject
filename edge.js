
var mouseCoord = new Object();

function detectScreenEgde(mouseX, mouseY){
	var width = $(document).width()-1;
	var height = $(document).height()-1;

	if(mouseX == 0){
		console.log("left");
	}
	if(mouseY == 0){
		console.log("top");
	}
	if(mouseY >= height){
		console.log("bottom");
	}
	if(mouseX >= width){
		console.log("right");
	}
}
function mMove (e) {
	mouseCoord.x = e.pageX;
	mouseCoord.y = e.pageY;
	detectScreenEgde(mouseCoord.x, mouseCoord.y)
}

$(document).mousemove(mMove);