var slideCounter = 0;

var loadSlide = function(){
	var content = document.getElementsByClassName("content")[0];
	content.innerHTML = slides[slideCounter];
};

var previousSlide = function(){
	if(slideCounter === 0){
		slideCounter = slides.length-1;
	}else{
		slideCounter--;
	}
	loadSlide();
};

var nextSlide = function(){
	if(slideCounter < slides.length-1){
		slideCounter++;
	}else{
		slideCounter = 0;
	}
	loadSlide();
};

var previous = "previous";
var next = "next";
var hidden = "hidden";
var visible = "visible";

var displayPreviousArrow = function(){
	displayArrow(previous,visible);
};

var displayNextArrow = function(){
	displayArrow(next,visible);
};

var hidePreviousArrow = function(){
	displayArrow(previous,hidden);
};

var hideNextArrow = function(){
	displayArrow(next,hidden);
};
var displayArrow = function(arrow,state){
	console.log("arrow :" + arrow + " visibility :" + state);
	if(arrow === "previous" || "next"){
		arrow = document.getElementById(arrow);
		arrow.children[0].style.visibility = state;
	}
};
