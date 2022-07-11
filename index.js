let name = prompt("Please whats your name?")
alert(name + " refresh page to enjoy game")

let randomNumber1 = Math.floor(Math.random() * 6) +1;

var randomDice  = "images/Dice" + randomNumber1 + ".png"

let image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDice)




let randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomDice  = "images/Dice" + randomNumber2 + ".png"

let image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDice)


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins"
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Winz"
}else{
    document.querySelector("h1").innerHTML = "Draw"
}