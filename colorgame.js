var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);//*
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){//now colors have only three items *
			squares[i].style.backgroundColor=colors[i];

		}else{
			squares[i].style.display="none";
		}
	}

});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);//*
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
		}
	
});


resetButton.addEventListener("click",function(){
//generate all new colors
colors=generateRandomColors(numSquares);

//pick a new random color from array
pickedColor=pickColor();
//Change color Display to match picked Color
colorDisplay.textContent=pickedColor;
this.textContent="New Colors";
messageDisplay.textContent=" ";

//change colors of squares
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
}
h1.style.backgroundColor="steelblue";
});



for(var i=0;i<squares.length;i++){
	//add initial colors to squares
	squares[i].style.backgroundColor=colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//alert("clicked in a sqares");
		//grab color of clicked sqare and compare to picked color
		var clickedColor=this.style.backgroundColor;

		if(clickedColor===pickedColor){
			messageDisplay.textContent="correct";
			resetButton.textContent="Play Again";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;

		}else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again"
		}
	});
}

function changeColors(color){
	//loop through all Squares
	for(var i=0;i<squares.length;i++)
	//change each color to match given color
	squares[i].style.backgroundColor=color;

}

function pickColor(){
	//pick a random number
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr=[];
	//add num random colors to array
	for(var i=0;i<num;i++){
		//get random color and push into arr
		arr.push(randomColor());
	}

	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r=Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	var g=Math.floor(Math.random()*256);

	//pick a "blue" from 0-255
	var b=Math.floor(Math.random()*256);
//rgb(r,g,b)
	return "rgb(" + r + ", " + g + ", " + b +  ")";

}