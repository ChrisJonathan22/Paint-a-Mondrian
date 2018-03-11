// This was the most challenging project for me so far. I looked for answers everywhere but I couldn't find anything that worked for me so I kept going. I decided to inspect the page and look at how she(Jennifer Dewalt) made it happen with javascript only to find out that she used jQuery which I'm avoiding in order to learn Vanilla JS. So I decided to convert the jQuery to Vanilla JS which wasn't easy but it felt so good when I made it work.


var red = document.getElementById("red");
var blue = document.getElementById("teal");
var green = document.getElementById("green");
var pink = document.getElementById("pink");



var paint = "white";

var color = document.getElementsByClassName("color");
var box = document.getElementsByClassName("box");





for(var i = 0; i < color.length; i++){

    color[i].addEventListener("click", function(){
        paint = this.id;
        
    } , false);
}

for(var i = 0; i < box.length; i++) {
    box[i].addEventListener("click",  function setColor(){
        this.style.backgroundColor = paint;
    }, false); 
}