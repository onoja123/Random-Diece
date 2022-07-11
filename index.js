// Make a promt to input name
let name = prompt("Please whats your name?")
alert(name + " refresh page to enjoy game")

//Generate a random number between 1- 6
let randomNumber1 = Math.floor(Math.random() * 6) +1;
//Generate a random dice image 
var randomDice  = "images/Dice" + randomNumber1 + ".png"
//Get image at a random diece
let image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDice)

//Generate a random number between 1- 6
let randomNumber2 = Math.floor(Math.random() * 6) +1;
//Generate a random dice image 
var randomDice  = "images/Dice" + randomNumber2 + ".png"
//Get image at a random diece
let image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDice)

//logic to check who wins or draws
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins"
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Winz"
}else{
    document.querySelector("h1").innerHTML = "Draw"
}
