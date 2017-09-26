var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]
var square = document.querySelectorAll(".square");
var pickedColor= colors[3];
var colorDisplay =document.getElementById("colorDisplay");
var displayMessage = document.querySelector("#message");



for( var i =0; i < square.length;i++){
    square[i].style.background = colors[i];
    square[i].addEventListener("click", function(){
        var clickedColor=this.style.background;
        if(clickedColor===pickedColor){
            displayMessage.textContent="correct";}
            else{
            displayMessage.textContent="wrong!"
              this.style.background="#000000";

        }

    });
}

function changeColor(color) {


}
