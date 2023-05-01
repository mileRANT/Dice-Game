var player1 = Math.floor(Math.random()*6) + 1;
var player2 = Math.floor(Math.random()*6) + 1;

var image1 = "./images/dice" + player1 + ".png";
var image2 = "./images/dice" + player2 + ".png";
document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
document.querySelector(".img1").setAttribute("src", image1);
// document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
document.querySelector(".img2").setAttribute("src", image2);

if (player1 = player2){
    document.querySelector("h1").textContent = "Draw!"
} else if (player1 > player2){
    document.querySelector("h1").textContent = "Player1 Wins!"
} else if (player1 < player2){
    document.querySelector("h1").textContent = "Player2 Wins!"
}