const delay=800
const gif=document.getElementById("window-player");
console.log(gif)

var lastClick = 0
var audioCoffeeMaking = new Audio('audios/open-coffee-jar.mp3')

function makeCoffee() {
    if (lastClick < (Date.now() - delay)) {
        audioCoffeeMaking.play();

    }

}