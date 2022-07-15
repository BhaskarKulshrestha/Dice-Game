// dices=["NULL","images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
    
var randomnum1 = Math.floor( Math.random()*6 + 1 )
var player1 = randomnum1
var img1="dice"+randomnum1+".png"
var randimg="images/"+img1

document.querySelectorAll("img")[0].setAttribute("src",randimg)

var randomnum2 = Math.floor( Math.random()*6 + 1 )
var img2="dice"+randomnum2+".png"
var randimg="images/"+img2

document.querySelectorAll("img")[1].setAttribute("src",randimg)
var player2 = randomnum2

if(player1 > player2)
{
    document.querySelector("h1").innerHTML="🚩PLAYER 1 WINS"
}
else if(player1 < player2)
{
    document.querySelector("h1").innerHTML="PLAYER 2 WINS🚩"
}
else
{
    document.querySelector("h1").innerHTML="🚩IT'S A TIE🚩"
}