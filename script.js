const delay=800
const gif=document.getElementById("window-player");
console.log(gif)

var lastClick = 0
var audioCoffeeMaking = new Audio('audios/open-coffee-jar.mp3')
var audioCoffeeQuality = new Audio('audios/coffeebean-scoop-91648.mp3')
var audioBaristaHiring = new Audio('audios/ding-80828.mp3')
var audioBaristaTraining = new Audio('audios/item-pick-up-38258.mp3')
var audioCoffeeDecor = new Audio('audios/house-building-89157.mp3')

function makeCoffee() {
    if (lastClick < (Date.now() - delay)) {
        audioCoffeeMaking.play();
    }
}

function hireBarista() {
    if (lastClick < (Date.now() - delay)) {
        audioBaristaHiring.play();
    }
}

function trainBaristas() {
    if (lastClick < (Date.now() - delay)) {
        audioBaristaTraining.play();
    }
}

function improveQual () {
    if (lastClick < (Date.now() - delay)) {
        audioCoffeeQuality.play();
    }
}

function improveCafe () {
    if (lastClick < (Date.now() - delay)) {
        audioCoffeeDecor.play();
    }
}