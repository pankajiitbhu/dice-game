var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

 //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",  randomImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "dice" + randomNumber2 + ".png";

var image2=document.querySelectorAll("img")[1];
 image2.setAttribute("src",randomImage2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
